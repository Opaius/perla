import React, { useState } from "react";

interface FileType {
  name: string;
  type: string;
}

const ImageUploader = ({
  onUploadSuccess,
}: {
  onUploadSuccess: (file: File) => void;
}) => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
      // Optionally display an error message for invalid file types
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    // Replace with your upload logic (e.g., using fetch API or a library)
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      onUploadSuccess(selectedFile); // Trigger callback for success
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error("Upload error:", error);
      // Handle upload errors (e.g., display an error message)
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && <img src={previewUrl} alt="Uploaded preview" />}
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default ImageUploader;
