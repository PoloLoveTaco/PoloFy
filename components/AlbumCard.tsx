"use client";

import { useEffect, useState } from "react";

interface AlbumCardProps {
  albumId: string;
  accessToken: string;
}

export default function AlbumCard({ albumId, accessToken }: AlbumCardProps) {
  const [album, setAlbum] = useState<{
    name: string;
    imageUrl: string;
    artist: string;
  } | null>(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();
      setAlbum({
        name: data.name,
        imageUrl: data.images[0].url,
        artist: data.artists.map((a: any) => a.name).join(", "),
      });
    };

    if (accessToken) {
      fetchAlbum();
    }
  }, [albumId, accessToken]);

  if (!album) return <div>Chargement...</div>;

  return (
    <div className="w-48 p-4 bg-neutral-800 rounded-lg shadow hover:scale-105 transition-transform duration-300">
      <img
        src={album.imageUrl}
        alt={`Album ${album.name}`}
        className="rounded-lg mb-3"
      />
      <h3 className="text-white font-bold text-sm">{album.name}</h3>
      <p className="text-gray-400 text-xs">{album.artist}</p>
    </div>
  );
}
