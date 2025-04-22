"use client";

import { useState, useMemo } from "react";
import { CustomUploadButton } from "./CustomUploadButton";
import { toast } from "react-hot-toast";
import { createBlogPost } from "@/server/actions/blog";

export function BlogPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    content: "",
    author: "",
    mainImage: "", // This will store the uploaded image URL
  });

  // Check if all fields are filled
  const isFormValid = useMemo(() => {
    return (
      formData.title.trim() !== "" &&
      formData.tagline.trim() !== "" &&
      formData.content.trim() !== "" &&
      formData.author.trim() !== "" &&
      formData.mainImage !== ""
    );
  }, [formData]);

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({
      ...prev,
      mainImage: url,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await createBlogPost(formData);
      toast.success("Blog post created successfully!");
      // Reset form
      setFormData({
        title: "",
        tagline: "",
        content: "",
        author: "",
        mainImage: "",
      });
    } catch (error : unknown) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to create blog post");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-oid="i_2i1de">
      {/* Title Input */}
      <div data-oid="w8n6ml0">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="wo:4khg"
        >
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Enter blog title"
          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          required
          data-oid="mb:tdec"
        />
      </div>

      {/* Author Input */}
      <div data-oid="qhg08c9">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid=":7x28i7"
        >
          Author
        </label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, author: e.target.value }))
          }
          placeholder="Enter author name"
          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          required
          data-oid=".4w35ep"
        />
      </div>

      {/* Tagline Input */}
      <div data-oid="iiaxi_m">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid=".mndb6b"
        >
          Tagline
        </label>
        <textarea
          value={formData.tagline}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, tagline: e.target.value }))
          }
          placeholder="Enter blog tagline"
          rows={4}
          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          required
          data-oid="ila:0sz"
        />
      </div>

      {/* Content Input */}
      <div data-oid="tauku1a">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="ogp8g6r"
        >
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, content: e.target.value }))
          }
          placeholder="Enter blog content"
          rows={8}
          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          required
          data-oid="r_w74cb"
        />
      </div>

      {/* Upload Image */}
      <div className="flex flex-col gap-2" data-oid=".44aiy7">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="m30tlp2"
        >
          Upload Image
        </label>
        <div className="flex items-center gap-2" data-oid="sxp:hh4">
          <CustomUploadButton
            onUploadComplete={handleImageUpload}
            data-oid="z164-3v"
          />

          {formData.mainImage && (
            <span className="text-sm text-green-600" data-oid="9p::gk6">
              Image uploaded successfully!
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div data-oid="4l-nadm">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full rounded-md border px-6 py-3 text-base font-medium transition duration-300 ease-in-out ${
            isFormValid
              ? "cursor-pointer border-primary bg-primary text-white hover:bg-opacity-80 hover:shadow-signUp"
              : "cursor-not-allowed border-gray-300 bg-gray-300 text-gray-500"
          }`}
          data-oid="2lgcym9"
        >
          Create Blog Post
        </button>
      </div>
    </form>
  );
}
