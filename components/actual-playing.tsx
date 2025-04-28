type ActualPlayingProps = {
    image: string;
    title: string;
    artist: string;
  };
  
  export default function ActualPlaying({ image, title, artist }: ActualPlayingProps) {
    return (
      <div className="w-full p-3 rounded-md transition">
        <img src={image} alt={title} className="rounded mb-2" />
        <p className="text-2xl font-mono font-bold truncate">{title}</p>
        <p className="text-l font-mono font-bold text-zinc-400">{artist}</p>
      </div>
    );
  }
  