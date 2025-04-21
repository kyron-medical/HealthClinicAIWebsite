import FullPageImageView from "../../_components/full-image-page";

export default async function PositionPage({
  params: { id: resourceId },
}: {
  params: { id: string };
}) {

  return (
    <FullPageImageView resourceId={resourceId} resourceType="Blog" />
  );
}

// import { getBlogPost } from "@/server/db";
// import Image from "next/image";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import { SocialShareButtons } from "./_components/SocialShareButtons";
// import { AuthorInfo } from "./_components/AuthorInfo";
// import { RelatedPosts } from "./_components/RelatedPosts";
// import { NewsletterSignup } from "./_components/NewsletterSignup";
// import { TableOfContents } from "./_components/TableOfContents";
// import { TextFormattingMenu } from "./_components/TextFormattingMenu";
// import { notFound } from "next/navigation";
// import React from "react";

// // Define a type for blog post data
// interface BlogPost {
//   id: string;
//   title: string;
//   content: string;
//   mainImage: string;
//   createdAt: string | Date;
// }

// export const dynamic = "force-dynamic";

// const sampleHeadings = [
//   "Introduction",
//   "The Challenge in Healthcare",
//   "How AI is Transforming Medical Billing",
//   "Benefits for Healthcare Providers",
//   "Implementation Strategies",
//   "Future Outlook",
// ];

// const author = {
//   name: "Dr. Sarah Johnson",
//   role: "Healthcare Technology Specialist",
//   avatar: "/images/blog/author.jpg",
// };

// const FormattedArticleContent: React.FC<{ content: string }> = ({
//   content,
// }) => {
//   const [isBold, setIsBold] = React.useState(false);
//   const [fontSize, setFontSize] = React.useState("medium");

//   const handleBoldToggle = () => {
//     setIsBold(!isBold);
//   };

//   const handleFontSizeChange = (size: string) => {
//     setFontSize(size);
//   };

//   // Generate dynamic styles based on formatting options
//   const contentStyle = {
//     fontWeight: isBold ? "bold" : "normal",
//     fontSize: fontSize,
//   };

//   return (
//     <>
//       <div className="mb-4 flex justify-end">
//         <TextFormattingMenu
//           onBoldToggle={handleBoldToggle}
//           onFontSizeChange={handleFontSizeChange}
//           isBold={isBold}
//           currentFontSize={fontSize}
//         />
//       </div>
//       <article
//         className="prose prose-lg dark:prose-invert max-w-none"
//         data-oid="hn85zjx"
//       >
//         <p data-oid="2ecz7vp" style={contentStyle}>
//           {content.split("\n").map((line, i) => (
//             <React.Fragment key={i}>
//               {line}
//               {i !== content.split("\n").length - 1 && (
//                 <br data-oid="z1rt8nh" />
//               )}
//             </React.Fragment>
//           ))}
//         </p>
//       </article>
//     </>
//   );
// };

// interface Props {
//   params: Promise<{ id: string }>;
// }

// export default async function BlogPost({ params }: Props) {
//   const { id } = await params;

//   let post: BlogPost | null = null;

//   try {
//     post = (await getBlogPost(id)) as BlogPost;
//   } catch (error) {
//     notFound();
//   }

//   if (!post) {
//     notFound();
//   }

//   return (
//     <>
//       <Breadcrumb
//         pageName={post.title}
//         description="Insights and perspectives on healthcare technology and innovation"
//         data-oid="itc_d0j"
//       />

//       <section className="py-16 lg:py-24" data-oid="ttrs-ji">
//         <div className="container" data-oid="2t90z_e">
//           <div className="mx-auto max-w-4xl" data-oid="h41q:pk">
//             {/* Featured Image */}
//             <div
//               className="mb-8 overflow-hidden rounded-2xl"
//               data-oid="du_a8m2"
//             >
//               <Image
//                 src={post.mainImage}
//                 alt={post.title}
//                 width={1200}
//                 height={675}
//                 className="h-auto w-full object-cover"
//                 priority
//                 data-oid="4ol6ays"
//               />
//             </div>

//             {/* Post Header */}
//             <div className="mb-12" data-oid="-v-ahz3">
//               <div
//                 className="mb-6 flex flex-wrap items-center justify-between gap-4"
//                 data-oid="zv_bcwj"
//               >
//                 <div className="flex items-center gap-4" data-oid="xfnutyc">
//                   <span
//                     className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
//                     data-oid="gjz106-"
//                   >
//                     Healthcare
//                   </span>
//                   <span
//                     className="text-sm text-gray-500 dark:text-gray-400"
//                     data-oid="66-uici"
//                   >
//                     {new Date(post.createdAt).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </span>
//                 </div>
//                 <SocialShareButtons data-oid="p32b1qu" />
//               </div>

//               <h1
//                 className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
//                 data-oid="rbwllmo"
//               >
//                 {post.title}
//               </h1>

//               <AuthorInfo author={author} data-oid=".0mml0t" />
//             </div>
//           </div>

//           {/* Content Area with Sidebar */}
//           <div
//             className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-4"
//             data-oid="qv6qmg5"
//           >
//             {/* Table of Contents Sidebar */}
//             <div className="hidden lg:block" data-oid=".8854vq">
//               <TableOfContents headings={sampleHeadings} data-oid="x_fha3k" />
//             </div>

//             {/* Main Content */}
//             <div className="lg:col-span-3" data-oid="oclvu5e">
//               <FormattedArticleContent content={post.content} />

//               {/* Related Posts */}
//               <RelatedPosts currentPostId={id} data-oid="za0y6q9" />

//               {/* Newsletter Signup */}
//               <NewsletterSignup data-oid="0_pc3dd" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// // Generate static params for common blog posts
// export async function generateStaticParams() {
//   return [];
// }
