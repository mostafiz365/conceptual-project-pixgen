import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  console.log(photo);
  return (
    <Card className="border rounded-lg">
      <div className="relative w-full aspect-square">
            <Image
                src={photo.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}
                className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>
      <div>
        <h2 className=" font-semibold text-xl">{photo.title}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart className="text-red-500"/>
          </p>
          <p>{photo.likes}</p>
        </div>

        <div className="flex items-center gap-2">
          <p>
            <BiDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
      <Button variant="outline" className={'w-full'}>View</Button>
    </Card>
  );
};

export default PhotoCard;
