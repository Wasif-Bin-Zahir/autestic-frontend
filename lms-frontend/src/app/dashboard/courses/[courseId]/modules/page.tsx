"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DeleteModal } from "@/components/DeleteModal"; 

const initialModules = [
  { id: "1", name: "Module 1", courseId: "1" },
  { id: "2", name: "Module 2", courseId: "1" },
  { id: "3", name: "Module 3", courseId: "2" },
];

export default function CourseModulesPage() {
  const params = useParams();
  const courseId = params?.courseId; 

  const [modules, setModules] = useState(
    initialModules.filter((module) => module.courseId === courseId)
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [moduleToDelete, setModuleToDelete] = useState<string | null>(null);


  const openDeleteModal = (moduleId: string) => {
    setModuleToDelete(moduleId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (moduleToDelete) {
      setModules((prev) => prev.filter((m) => m.id !== moduleToDelete));
    }
    setShowDeleteModal(false);
    setModuleToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setModuleToDelete(null);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-6">Modules for Course {courseId}</h1>
      <Link href={`/dashboard/courses/${courseId}/modules/addModule`}>
        <Button className="mb-4">+ Add New Module</Button>
      </Link>
      {modules.length > 0 ? (
        <ul className="space-y-4">
          {modules.map((module) => (
            <li
              key={module.id}
              className="border p-4 rounded bg-white shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-bold">{module.name}</h2>
              </div>
              <div className="space-x-2">
                <Link href={`/dashboard/courses/${courseId}/modules/${module.id}/videos`}>
                  <Button variant="outline" size="sm">
                    Manage Videos
                  </Button>
                </Link>
                <Link href={`/dashboard/courses/${courseId}/modules/${module.id}/editModule`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => openDeleteModal(module.id)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No modules found for this course.</p>
      )}

      {showDeleteModal && (
        <DeleteModal
          message="Are you sure you want to delete this module?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}
