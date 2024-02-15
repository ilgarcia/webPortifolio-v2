import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

function Posts({ posts }: Props) {
  return (
    <section className="mt-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-5 ">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}/>
        ))}
      </section>
    </section>
  );
}

export default Posts;
