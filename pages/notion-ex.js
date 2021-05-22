import { getDatabase } from "../libs/notion";
import NotionBlock from "../components/atoms/NotionBlock";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function NotionEx({ posts }) {
  return (
    <ol className="text-red-900">
      {posts.map((post) => (
        <li key={post.id}>
          <a href={`/${post.id}`}>
            <NotionBlock text={post.properties.Name.title} />
          </a>
        </li>
      ))}
    </ol>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
