import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const PhotoDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://conceptual-project-pixgen.vercel.app/data.json');
    const photos = await res.json();
    const photo = photos.find(item => item.id == id);
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Photo Details Page</h2>
            <div>
                <Card className="border rounded-lg">
      <div className="relative aspect-square">
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
        <h3>{photo.prompt}</h3>
      </div>
    </Card>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;