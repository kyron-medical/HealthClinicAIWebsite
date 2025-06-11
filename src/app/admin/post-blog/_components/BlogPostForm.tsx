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
    } catch (error: unknown) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to create blog post");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-oid="u5rc-1u">
      {/* Title Input */}
      <div data-oid="d9_lorr">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="0o.o944"
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
          data-oid="hwti6o4"
        />
      </div>

      {/* Author Input */}
      <div data-oid="mgg-0zf">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="10abqjc"
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
          data-oid="fz:isz1"
        />
      </div>

      {/* Tagline Input */}
      <div data-oid="gzn1jco">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="ozk:hdq"
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
          data-oid="vu41u43"
        />
      </div>

      {/* Content Input */}
      <div data-oid="226qw_0">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="g40xtll"
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
          data-oid="3rn9i6y"
        />
      </div>

      {/* Upload Image */}
      <div className="flex flex-col gap-2" data-oid="kdogznt">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="294fi-c"
        >
          Upload Image
        </label>
        <div className="flex items-center gap-2" data-oid="z-zosq-">
          <CustomUploadButton
            onUploadComplete={handleImageUpload}
            data-oid="0fvddcu"
          />

          {formData.mainImage && (
            <span className="text-sm text-green-600" data-oid="g51eb2:">
              Image uploaded successfully!
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div data-oid="8:gnm_c">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full rounded-md border px-6 py-3 text-base font-medium transition duration-300 ease-in-out ${
            isFormValid
              ? "cursor-pointer border-primary bg-primary text-white hover:bg-opacity-80 hover:shadow-signUp"
              : "cursor-not-allowed border-gray-300 bg-gray-300 text-gray-500"
          }`}
          data-oid="5hf1hph"
        >
          Create Blog Post
        </button>
      </div>
    </form>
  );
}
