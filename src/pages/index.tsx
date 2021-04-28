import { withUrqlClient } from "next-urql";
import { Template } from "src/components/Template/Template";
import { createUrqlClient } from "../utils/creatUrqlClient";
import { usePostsQuery } from "../generated/graphql";

function Home(): JSX.Element {
  const [{ data }] = usePostsQuery();

  return (
    <Template title="Home">
      <h1>Home</h1>
      {!data
        ? null
        : data.posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </Template>
  );
}

export default withUrqlClient(createUrqlClient)(Home);
