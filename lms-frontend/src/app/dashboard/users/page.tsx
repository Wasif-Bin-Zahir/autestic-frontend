"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DeleteModal } from "@/components/DeleteModal";

const initialUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    subscriptionStatus: "Active",
    location: "New York",
    subscription: {
      startDate: "2023-01-01",
      renewalDate: "2024-01-01",
      paymentStatus: "Paid",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    subscriptionStatus: "Suspended",
    location: "Los Angeles",
    subscription: {
      startDate: "2022-06-15",
      renewalDate: "2023-06-15",
      paymentStatus: "Failed",
    },
  },
];

export default function UserListPage() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  // Filtered array for searching
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Trigger the delete modal
  const openDeleteModal = (userId: string) => {
    setDeleteUserId(userId);
    setShowDeleteModal(true);
  };

  // Handle Confirm in the modal
  const confirmDelete = () => {
    if (deleteUserId) {
      setUsers((prev) => prev.filter((user) => user.id !== deleteUserId));
    }
    setShowDeleteModal(false);
    setDeleteUserId(null);
  };

  // Handle Cancel in the modal
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteUserId(null);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
        <Link href="/dashboard/users/add">
          <Button>Add New User</Button>
        </Link>
      </div>

      <Table>
        <TableCaption>A list of all registered users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Subscription</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>
                <Link
                  href={`/dashboard/users/${user.id}/subscription`}
                  className="text-blue-500 hover:underline"
                >
                  {user.subscriptionStatus}
                </Link>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/dashboard/users/${user.id}/edit`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => openDeleteModal(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Conditionally render the DeleteModal */}
      {showDeleteModal && (
        <DeleteModal
          message="Are you sure you want to delete this user?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}
