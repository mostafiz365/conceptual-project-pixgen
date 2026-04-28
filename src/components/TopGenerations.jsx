import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {
    const res = await fetch('https://conceptual-project-pixgen.vercel.app/data.json');
    const photos = await res.json();
    return (
        <div className="my-7 space-y-4">
            <h2 className="text-3xl font-bold text-center">Top Image Generation</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    photos.slice(0,8).map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>

        </div>
    );
};

export default TopGenerations;