type ActualPlayingSmallProps = {
    image: string;
    title: string;
    artist: string;
  };
  
  export default function   ({ image, title, artist }: ActualPlayingSmallProps) {
    return (
      <div className="flex items-center gap-4 rounded-md hover:bg-zinc-700 transition">
        <img src={image} alt={title} className="w-12 h-12 rounded-md object-cover" />
        <div>
            <p className="text-white text-sm truncate">{title}</p>
            <p className="text-sm font-mono text-zinc-400">{artist}</p>
        </div>
      </div>
    );
  }
  