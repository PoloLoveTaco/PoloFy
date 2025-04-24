type ArtistCardProps = {
  image: string;
  artist: string;
};

export default function ArtistCard({ image, artist }: ArtistCardProps) {
  return (
    <div className="w-50 p-3 rounded-md hover:bg-zinc-700 transition">
      <img src={image} alt={artist} className="rounded-full mb-2" />
      <p className="text-sm text-center font-medium truncate">{artist}</p>
    </div>
  );
}
