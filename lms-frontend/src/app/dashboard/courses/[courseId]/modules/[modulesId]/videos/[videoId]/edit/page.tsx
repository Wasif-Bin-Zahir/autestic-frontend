"use client";

import React, { useEffect, useState } from "react";
import VideoForm, { VideoFormData } from "@/app/dashboard/components/VideoForm";
import { useRouter } from "nextjs-toploader/app";
import { useParams } from "next/navigation";

export default function EditVideoPage() {
  const [initialValues, setInitialValues] = useState<VideoFormData | null>(null);
  const router = useRouter();
  const params = useParams();
  const videoId = params?.videoId as string; // Explicitly type videoId

  useEffect(() => {
    if (videoId) {
      const videoDetails: VideoFormData = {
        title: "Introduction to Module",
        description: "An introductory video for this module.",
        thumbnail: "https://via.placeholder.com/150",
        duration: "5:00",
        downloadEnabled: true,
      };
      setInitialValues(videoDetails);
    }
  }, [videoId]);

  const handleEditVideo = (data: VideoFormData) => {
    console.log(`Updated Video (${videoId}):`, data);
    alert("Video updated successfully!");
    router.push("../");
  };

  if (!initialValues) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Video</h1>
      <VideoForm
        initialValues={initialValues}
        onSubmit={handleEditVideo}
        submitButtonLabel="Save Changes"
      />
    </div>
  );
}
