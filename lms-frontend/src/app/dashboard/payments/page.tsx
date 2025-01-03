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
import { Button } from "@/components/ui/button";
import { DeleteModal } from "@/components/DeleteModal";

type Payment = {
  id: string;
  user: string;
  amount: string;
  date: string;
  status: "Paid" | "Failed" | "Pending";
};

const initialPayments: Payment[] = [
  {
    id: "1",
    user: "John Doe",
    amount: "$50",
    date: "2023-06-01",
    status: "Paid",
  },
  {
    id: "2",
    user: "Jane Smith",
    amount: "$30",
    date: "2023-06-05",
    status: "Failed",
  },
  {
    id: "3",
    user: "Alice Johnson",
    amount: "$75",
    date: "2023-06-10",
    status: "Pending",
  },
];

export default function PaymentListPage() {
  const [payments, setPayments] = useState<Payment[]>(initialPayments);

  // State for the delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState<string | null>(null);

  // Open the modal
  const openDeleteModal = (id: string) => {
    setPaymentToDelete(id);
    setShowDeleteModal(true);
  };

  // Confirm the delete action
  const confirmDelete = () => {
    if (paymentToDelete) {
      setPayments((prev) => prev.filter((pay) => pay.id !== paymentToDelete));
    }
    setPaymentToDelete(null);
    setShowDeleteModal(false);
  };

  // Cancel the delete action
  const cancelDelete = () => {
    setPaymentToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">Payment List</h1>

      <Table>
        <TableCaption>All platform payment records</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6">
                No payment records found.
              </TableCell>
            </TableRow>
          ) : (
            payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.user}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell
                  className={
                    payment.status === "Paid"
                      ? "text-green-600"
                      : payment.status === "Failed"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }
                >
                  {payment.status}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => openDeleteModal(payment.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {showDeleteModal && (
        <DeleteModal
          message="Are you sure you want to delete this payment record?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}
