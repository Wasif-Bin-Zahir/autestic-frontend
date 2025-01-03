"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DeleteModal } from "@/components/DeleteModal"; 

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

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState<string | null>(null);

  const openDeleteModal = (videoId: string) => {
    setVideoToDelete(videoId);
    setShowDeleteModal(true);
  };

 
  const confirmDelete = () => {
    if (videoToDelete) {
      setVideos((prev) => prev.filter((video) => video.id !== videoToDelete));
    }
    setShowDeleteModal(false);
    setVideoToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setVideoToDelete(null);
  };

  const courseId = "1";
  const moduleId = "1";

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-6">Manage Videos</h1>


      <Link href={`/dashboard/courses/${courseId}/modules/${moduleId}/videos/add`}>
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
                <strong>Download:</strong> {video.downloadEnabled ? "Enabled" : "Disabled"}
              </p>
            </div>
          </div>
          <div className="space-x-2">
            <Link href={`/dashboard/courses/${courseId}/modules/${moduleId}/videos/${video.id}/edit`}>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Link>
            <Button variant="destructive" size="sm" onClick={() => openDeleteModal(video.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}

      {showDeleteModal && (
        <DeleteModal
          message="Are you sure you want to delete this video?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}
