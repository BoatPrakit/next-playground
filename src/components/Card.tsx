import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  footer,
}) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-sm">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          width={200}
          height={200}
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      {footer && <div className="bg-gray-100 p-3">{footer}</div>}
    </div>
  );
};

export default Card;
