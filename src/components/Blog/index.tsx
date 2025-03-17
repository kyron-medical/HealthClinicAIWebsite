import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "../../app/news/_components/SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      data-oid="xe9r.or"
    >
      <div className="container" data-oid="gfzeb0c">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          data-oid="eryscyi"
        />

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
          data-oid="8rg9jr4"
        >
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full" data-oid="qxrh5-g">
              <SingleBlog blog={blog} data-oid="sczn7t:" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
