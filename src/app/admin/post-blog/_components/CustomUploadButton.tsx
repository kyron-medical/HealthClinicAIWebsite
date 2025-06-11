"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "react-hot-toast";

type Input = Parameters<typeof useUploadThing>;

interface CustomUploadButtonProps {
  onUploadComplete: (url: string) => void;
}

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
    } catch (error: unknown) {
      console.error("Upload failed:", error);
      return;
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
      data-oid="m5zn.mv"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        data-oid="_g0x9yw"
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
      data-oid="01czjcj"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
        data-oid="f3-xqf5"
      />

      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        className="spinner_ajPY"
        data-oid="zyatn.t"
      />
    </svg>
  );
}

export function CustomUploadButton({
  onUploadComplete,
}: CustomUploadButtonProps) {
  const router = useRouter();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      toast.loading(
        <div className="flex items-center gap-2" data-oid="9wm7p.q">
          <LoadingSpinnerSVG data-oid="j174jwp" />
          <span className="text-lg" data-oid="bl.x20h">
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
    onClientUploadComplete: (res) => {
      const uploadedUrl = res?.[0]?.ufsUrl;
      if (uploadedUrl) {
        const uploadedUrl = res[0].ufsUrl;
        console.log("Upload complete:", uploadedUrl);
        toast.success("Image uploaded successfully!", {
          id: "upload-toast",
        });
        onUploadComplete(uploadedUrl);
        router.refresh();
      }
    },
  });

  return (
    <div data-oid="zqokmj8">
      <label
        htmlFor="upload-button"
        className="cursor-pointer"
        data-oid="ob7_83_"
      >
        <AddPostIcon data-oid="rdqp1hw" />
      </label>
      <input
        id="upload-button"
        type="file"
        value=""
        className="sr-only"
        {...inputProps}
        data-oid="_46ur5t"
      />
    </div>
  );
}
