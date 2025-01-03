"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export type VideoFormData = {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  downloadEnabled: boolean;
};

type VideoFormProps = {
  initialValues?: VideoFormData;
  onSubmit: (data: VideoFormData) => void;
  submitButtonLabel?: string;
};

const VideoForm: React.FC<VideoFormProps> = ({
  initialValues,
  onSubmit,
  submitButtonLabel = "Save",
}) => {
  const { register, handleSubmit, setValue } = useForm<VideoFormData>({
    defaultValues: initialValues || {},
  });

  useEffect(() => {
    if (initialValues) {
      Object.entries(initialValues).forEach(([key, value]) => {
        setValue(key as keyof VideoFormData, value);
      });
    }
  }, [initialValues, setValue]);

  return (
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
        <input {...register("downloadEnabled")} type="checkbox" id="downloadEnabled" />
        <label htmlFor="downloadEnabled" className="text-sm text-gray-700">
          Enable Download
        </label>
      </div>
      <Button type="submit" className="w-full">
        {submitButtonLabel}
      </Button>
    </form>
  );
};

export default VideoForm;
