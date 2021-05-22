import { Fragment } from "react";
import { getDatabase, getPage, getBlocks } from "../libs/notion";
import { databaseId } from "./notion-ex";
import AppBar from "../components/atoms/AppBar";
import BreadCrumb from "../components/atoms/BreadCrumb";
import MainLink from "../components/atoms/MainLink";
import NotionBlock from "../components/atoms/NotionBlock";

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
              className="appearance-none h-4 w-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-black checked:hover:bg-orange-600 dark:checked:hover:bg-orange-600 checked:bg-draplin checked:border-transparent dark:checked:border-transparent transition-all"
            />{" "}
            <NotionBlock text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <NotionBlock text={value.text} />
          </summary>
          It's a toggle!
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
          pathNameTwo={blocks.title}
          goToTwo="/about"
        />
        <h1 className="billboard">
          <NotionBlock text={page.properties.Name.title} />
        </h1>
        {blocks.map((block) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </article>
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

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};