import React, { useState, useRef, ChangeEvent, DragEvent } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className='w-full h-[60%] overflow-hidden p-3 rounded-xl bg-secondary-100'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {!selectedImage && (
        <button
          onClick={handleClick}
          className='w-full h-full text-2xl border border-dashed border-secondary-500 rounded-xl flex items-center justify-center gap-2'
        >
          عکس خود را انتخاب کنید یا فایل را اینجا بکشید و رها کنید
          <AiOutlineCloudUpload />
        </button>
      )}
      {selectedImage && (
        <img
          className="w-full h-full bg-cover rounded-xl"
          src={selectedImage}
          alt='Selected'
        />
      )}
    </div>
  );
};

export default ImageUploader;
