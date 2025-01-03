"use client";

import React from "react";
import VideoForm, { VideoFormData } from "@/app/dashboard/components/VideoForm";
import { useRouter } from "nextjs-toploader/app";

export default function AddVideoPage() {
  const router = useRouter();

  const handleAddVideo = (data: VideoFormData) => {
    console.log("New Video:", data);
    alert("Video added successfully!");
    router.push("./");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Video</h1>
      <VideoForm onSubmit={handleAddVideo} submitButtonLabel="Save Video" />
    </div>
  );
}
