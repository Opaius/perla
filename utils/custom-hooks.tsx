import { toast } from "@/components/ui/use-toast";
import { useState, useCallback } from "react";

const useImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (!selectedFile) return;

      const isImage = selectedFile.type.startsWith("image/");
      if (!isImage) {
        setPreviewUrl(null);
        setFile(null);
        toast({
          title: "Invalid file format",
          description: "Please select a valid image file",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    },
    []
  );

  return { file, previewUrl, handleFileChange };
};

export default useImageUpload;
