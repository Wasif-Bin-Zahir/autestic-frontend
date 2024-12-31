// src/components/DeleteModal.tsx

"use client";

import React from "react";
import { Button } from "@/components/ui/button";

// 1. Import Card components from ShadCN
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface DeleteModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteModal({ message, onConfirm, onCancel }: DeleteModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* 2. Wrap the modal in a Card */}
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Confirmation</CardTitle>
          <CardDescription className="mt-2">{message}</CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Confirm
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
