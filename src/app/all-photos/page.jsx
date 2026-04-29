import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async({searchParams}) => {
    const {category} = await searchParams;
    const res = await fetch('https://conceptual-project-pixgen.vercel.app/data.json');
    const photos = await res.json();

    const filteredPhoto = category ? photos.filter(photo=> photo.category.toLowerCase() == category.toLowerCase()) : photos ;
    return (
        <div className="my-7 space-y-5">
            <h2 className="text-3xl font-bold text-center">All Photos Section</h2>
            <Category></Category>
            <div className="grid grid-cols-4 gap-5">
                {
                    filteredPhoto.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;