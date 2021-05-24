import { Fragment } from "react";
import { getDatabase, getPage, getBlocks } from "../libs/notion";
import { databaseId } from "./notion-ex";
import AppBar from "../components/atoms/AppBar";
import BreadCrumb from "../components/atoms/BreadCrumb";
import MainLink from "../components/atoms/MainLink";
import NotionBlock from "../components/atoms/NotionBlock";
import Footer from "../components/molecules/Footer";

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="paragraph-1">
          <NotionBlock text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="h1">
          <NotionBlock text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="h2">
          <NotionBlock text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="h3">
          <NotionBlock text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
      return (
        <ul className="ul">
          <li>
            <NotionBlock text={value.text} />
          </li>
        </ul>
      );
    case "numbered_list_item":
      return (
        <ol className="nl">
          <li>
            <NotionBlock text={value.text} />
          </li>
        </ol>
      );
    case "to_do":
      return (
        <div>
          <label
            htmlFor={id}
            className="paragraph-1 cursor-pointer flex items-center space-x-3">
            <input
              type="checkbox"
              id={id}
              defaultChecked={value.checked}
              className="appearance-none h-4 w-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-black hover:checked:bg-orange-600 dark:hover:checked:bg-orange-600 checked:bg-draplin checked:border-transparent dark:checked:border-transparent transition-all form-tick"
            />{" "}
            <NotionBlock text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-4 border border-solid border-gray-200 dark:border-gray-800 cursor-pointer">
          <summary className="paragraph-1 font-medium">
            <NotionBlock text={value.text} />
          </summary>
          <div className="px-4 pt-4">
            <p className="paragraph-1">
              {value.children?.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}
            </p>
          </div>
        </details>
      );
    case "child_page":
      return <MainLink string={value.title} />;
    default:
      return (
        <p className="paragraph-1">
          ❌ Unsupported block ($
          {type === "unsupported" ? "unsupported by Notion API" : type})
        </p>
      );
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world" />
      <article className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Thinking /"
          goToThree="/notion-ex"
          pathNameFour={[<NotionBlock text={page.properties.Name.title} />]}
        />
        <h1 className="billboard">
          <NotionBlock text={page.properties.Name.title} />
        </h1>
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </article>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
