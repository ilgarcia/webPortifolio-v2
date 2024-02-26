import Link from "next/link";

type Props = {
  relatedPost: Post;
};

function RelatedPostCard({ relatedPost }: Props) {
  return (
    <Link
      href={`/journal/post/${relatedPost.slug.current}`}
      
      className="w-full rounded-lg p-4 relative overflow-hidden border border-gray-800 shadow-xl hover:brightness-125"
    >
      <div className="absolute inset-px bg-gradient-to-br from-slate-950 to-slate-800 -z-10" />
      <h3 className="text-xl font-semibold">{relatedPost.title}</h3>
      <div className="flex text-xs font-fira text-slate-400/70 uppercase">
        {relatedPost.category?.title}&nbsp;-&nbsp;
        {new Date(relatedPost._createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    </Link>
  );
}

export default RelatedPostCard;
