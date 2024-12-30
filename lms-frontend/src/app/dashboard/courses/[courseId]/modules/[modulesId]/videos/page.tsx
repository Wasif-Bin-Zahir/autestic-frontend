"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const initialVideos = [
  {
    id: "1",
    title: "Introduction to Module",
    description: "An introductory video for this module.",
    thumbnail: "https://via.placeholder.com/150",
    duration: "5:00",
    downloadEnabled: true,
  },
  {
    id: "2",
    title: "Deep Dive",
    description: "A detailed explanation of the topic.",
    thumbnail: "https://via.placeholder.com/150",
    duration: "15:00",
    downloadEnabled: false,
  },
];

export default function ModuleVideosPage() {
  const [videos, setVideos] = useState(initialVideos);

  const handleDelete = (videoId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this video?");
    if (confirmDelete) {
      setVideos((prev) => prev.filter((video) => video.id !== videoId));
      alert("Video deleted successfully!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Videos</h1>
      <Link href="/dashboard/courses/${courseId}/modules/${moduleId}/videos/add">
        <Button className="mb-4">+ Add New Video</Button>
      </Link>
      {videos.map((video) => (
        <div
          key={video.id}
          className="border p-4 rounded bg-white shadow-md flex justify-between items-center mb-4"
        >
          <div className="flex items-center space-x-4">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={64}
              height={64}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-bold">{video.title}</h2>
              <p className="text-sm text-gray-500">{video.description}</p>
              <p className="text-sm text-gray-400">
                <strong>Duration:</strong> {video.duration} |{" "}
                <strong>Download:</strong>{" "}
                {video.downloadEnabled ? "Enabled" : "Disabled"}
              </p>
            </div>
          </div>
          <div className="space-x-2">
            <Link href="/dashboard/courses/${courseId}/modules/${moduleId}/videos/${videoId}/edit">
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Link>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(video.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
