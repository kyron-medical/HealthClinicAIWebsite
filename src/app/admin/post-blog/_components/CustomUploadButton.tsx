"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "react-hot-toast";

type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    try {
      const result = await $ut.startUpload(selectedFiles);
      if (result) {
        console.log("Upload successful:", result);
        return result[0].ufsUrl; // Return the URL of the uploaded file
      }
    } catch (error) {
      console.error("Upload failed:", error);
      throw error;
    }
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function AddPostIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
      data-oid=".skacon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        data-oid="nqir918"
      />
    </svg>
  );
}

function LoadingSpinnerSVG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      data-oid="dgczyin"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
        data-oid="v6ha-dp"
      />

      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        className="spinner_ajPY"
        data-oid="xt:lulr"
      />
    </svg>
  );
}

export function CustomUploadButton() {
  const router = useRouter();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      toast.loading(
        <div className="flex items-center gap-2" data-oid="uf.77km">
          <LoadingSpinnerSVG data-oid="0noqgah" />
          <span className="text-lg" data-oid="gnrp9n0">
            Uploading image...
          </span>
        </div>,
        {
          id: "upload-begin",
        },
      );
    },
    onUploadError(error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image");
      toast.dismiss("upload-begin");
    },
    onClientUploadComplete(res) {
      if (res && res[0]) {
        console.log("Upload complete:", res);
        toast.dismiss("upload-begin");
        toast.success("Image uploaded successfully!");
        router.refresh();
      }
    },
  });

  return (
    <div data-oid="-.pr38e">
      <label
        htmlFor="upload-button"
        className="cursor-pointer"
        data-oid="t05h-ue"
      >
        <AddPostIcon data-oid="w28ntqx" />
      </label>
      <input
        id="upload-button"
        type="file"
        value=""
        className="sr-only"
        {...inputProps}
        data-oid="6s._nhv"
      />
    </div>
  );
}
