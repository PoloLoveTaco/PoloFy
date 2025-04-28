type TrackCardProps = {
  image: string;
  title: string;
  artist: string;
};

export default function TrackCard({ image, title, artist }: TrackCardProps) {
  return (
    <div className="w-50 bg-zinc-800 p-3 rounded-md hover:bg-zinc-700 transition">
      <img src={image} alt={title} className="rounded mb-2" />
      <p className="text-sm font-medium truncate">{title}</p>
      <p className="text-xs text-zinc-400">{artist}</p>
    </div>
  );
}
