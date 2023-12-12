import Link from "next/link";

export const RichTextWorkExperience = {

  list: {
    bullet: ({ children }: any) => <ol className="flex flex-col space-y-2">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      // const rel = !value.href.starsWith("/")
      //   ? "noreferrer noopener"
      //   : undefined;

      const rel = undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-bold underline decoration-2 decoration-theme-orange hover:decoration-theme-purple"
        >
          {children}
        </Link>
      );
    },
  },
};
