"use client";

import { useState, useMemo } from "react";
import { CustomUploadButton } from "./CustomUploadButton";
import { toast } from "react-hot-toast";

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
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

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
    <form onSubmit={handleSubmit} className="space-y-6" data-oid="_3vknr6">
      {/* Title Input */}
      <div data-oid="a5itdg2">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="18q020n"
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
          data-oid="-li2m19"
        />
      </div>

      {/* Author Input */}
      <div data-oid="ivs6u0t">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="hqnh.jk"
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
          data-oid="-.i:taa"
        />
      </div>

      {/* Tagline Input */}
      <div data-oid="3gnr5em">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="6of6gdq"
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
          data-oid="t5y2psw"
        />
      </div>

      {/* Content Input */}
      <div data-oid="1k994ze">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="b95dvuv"
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
          data-oid="rdze9cy"
        />
      </div>

      {/* Upload Image */}
      <div className="flex flex-col gap-2" data-oid="58fnjk-">
        <label
          className="mb-2.5 block font-medium text-black dark:text-white"
          data-oid="os2xns3"
        >
          Upload Image
        </label>
        <div className="flex items-center gap-2" data-oid="f3lh544">
          <CustomUploadButton
            onUploadComplete={handleImageUpload}
            data-oid="6cg0c75"
          />

          {formData.mainImage && (
            <span className="text-sm text-green-600" data-oid="3y9q3d8">
              Image uploaded successfully!
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div data-oid="c.64ety">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full rounded-md border px-6 py-3 text-base font-medium transition duration-300 ease-in-out ${
            isFormValid
              ? "cursor-pointer border-primary bg-primary text-white hover:bg-opacity-80 hover:shadow-signUp"
              : "cursor-not-allowed border-gray-300 bg-gray-300 text-gray-500"
          }`}
          data-oid="ezc:a_j"
        >
          Create Blog Post
        </button>
      </div>
    </form>
  );
}
