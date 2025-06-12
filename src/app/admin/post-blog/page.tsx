import { BlogPostForm } from "./_components/BlogPostForm";

export const dynamic = "force-dynamic";

export default async function PostBlogPage() {
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <BlogPostForm />
      </div>
    </section>
  );
}
