type RecentPlaylistProps = {
    image: string;
    title: string;
  };
  
  export default function RecentPlaylist({ image, title }: RecentPlaylistProps) {
    return (
      <div className="flex items-center gap-4 p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition">
        <img src={image} alt={title} className="w-12 h-12 rounded-sm object-cover" />
        <p className="text-white font-semibold text-sm truncate">{title}</p>
      </div>
    );
  }
  