"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";

type VideoForm = {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  downloadEnabled: boolean;
};

export default function EditVideoPage() {
  const { register, handleSubmit, setValue } = useForm<VideoForm>();
  const router = useRouter();
  const params = useParams();
  const videoId = params?.videoId;

  useEffect(() => {
    if (videoId) {
      const videoDetails = {
        title: "Introduction to Module",
        description: "An introductory video for this module.",
        thumbnail: "https://via.placeholder.com/150",
        duration: "5:00",
        downloadEnabled: true,
      }; // Replace with API call
      setValue("title", videoDetails.title);
      setValue("description", videoDetails.description);
      setValue("thumbnail", videoDetails.thumbnail);
      setValue("duration", videoDetails.duration);
      setValue("downloadEnabled", videoDetails.downloadEnabled);
    }
  }, [videoId, setValue]);

  const onSubmit = (data: VideoForm) => {
    console.log(`Updated Video (${videoId}):`, data);
    alert("Video updated successfully!");
    router.push("../"); // Redirect back to videos list
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Video</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Video Title</label>
          <Input {...register("title", { required: true })} placeholder="Enter video title" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea
            {...register("description", { required: true })}
            placeholder="Enter video description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <Input {...register("thumbnail", { required: true })} placeholder="Enter thumbnail URL" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <Input {...register("duration", { required: true })} placeholder="Enter video duration" />
        </div>
        <div className="flex items-center space-x-2">
          <input
            {...register("downloadEnabled")}
            type="checkbox"
            id="downloadEnabled"
          />
          <label htmlFor="downloadEnabled" className="text-sm text-gray-700">
            Enable Download
          </label>
        </div>
        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
