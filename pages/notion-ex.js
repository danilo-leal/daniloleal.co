import { getDatabase } from "../libs/notion";
import NotionBlock from "../components/atoms/NotionBlock";
import AppBar from "../components/atoms/AppBar";
import CaseHeader from "../components/molecules/CaseHeader";
import BreadCrumb from "../components/atoms/BreadCrumb";
import Footer from "../components/molecules/Footer";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function NotionEx({ posts }) {
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world" />
      <article className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Thinking"
          pathNameFour=""
        />
        <CaseHeader
          title="Thinking"
          summary="Food for thought at most. Rambiling for sure!"
        />
        <ol className="space-y-6 divide-y dark:divide-gray-700">
          {posts.map((post) => {
            const date = new Date(post.created_time).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            });
            return (
              <li key={post.id} className="pt-6">
                {/* {post.properties.Tags.multi_select.map((tag) => (
                  <p>{tag.name}</p>
                ))} */}
                <a href={`/${post.id}`} className="group">
                  <h1 className="cursor-pointer mb-2 text-xl font-medium dark:text-white hover:text-draplin dark:hover:text-draplin flex items-center ">
                    <NotionBlock text={post.properties.Name.title} />
                    <span>
                      <svg
                        className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </h1>
                </a>
                <p className="subtitle-text">{date}</p>
              </li>
            );
          })}
        </ol>
      </article>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
