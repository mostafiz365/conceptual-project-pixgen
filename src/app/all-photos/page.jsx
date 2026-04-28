import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async() => {
    const res = await fetch('https://conceptual-project-pixgen.vercel.app/data.json');
    const photos = await res.json();
    return (
        <div className="my-7 space-y-5">
            <h2 className="text-3xl font-bold text-center">All Photos Section</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;