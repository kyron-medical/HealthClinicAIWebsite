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
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to create blog post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-oid="u:dbbk7">
      {/* Title Input */}
      <div data-oid="-xo-z0p">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid=":1mih0r"
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
          data-oid="-p-qmxb"
        />
      </div>

      {/* Author Input */}
      <div data-oid="3b6qfk1">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="osbhmds"
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
          data-oid="rccuf46"
        />
      </div>

      {/* Tagline Input */}
      <div data-oid="46mm77i">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="ay776w5"
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
          data-oid="1ne1pkf"
        />
      </div>

      {/* Content Input */}
      <div data-oid="i87wxjg">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="fruma0c"
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
          data-oid=":ox8f_5"
        />
      </div>

      {/* Upload Image */}
      <div className="flex flex-col gap-2" data-oid="2zcqxqn">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="9-:6e3k"
        >
          Upload Image
        </label>
        <div className="flex items-center gap-2" data-oid="e1s_7.j">
          <CustomUploadButton
            onUploadComplete={handleImageUpload}
            data-oid="_bwpcw1"
          />

          {formData.mainImage && (
            <span className="text-sm text-green-600" data-oid=":qlv8n2">
              Image uploaded successfully!
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div data-oid="tcq0vsw">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full rounded-md border px-6 py-3 text-base font-medium transition duration-300 ease-in-out ${
            isFormValid
              ? "cursor-pointer border-primary bg-primary text-white hover:bg-opacity-80 hover:shadow-signUp"
              : "cursor-not-allowed border-gray-300 bg-gray-300 text-gray-500"
          }`}
          data-oid="axz51iu"
        >
          Create Blog Post
        </button>
      </div>
    </form>
  );
}
