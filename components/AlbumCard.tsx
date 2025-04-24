"use client";

import { useEffect, useState } from "react";

export default function AlbumCard({ albumId, accessToken }: { albumId: string; accessToken: string }) {
  const [album, setAlbum] = useState<any>(null);

  useEffect(() => {
    if (!accessToken) return;

    fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(res => {
        console.log("Status de la réponse:", res.status);
        return res.json();
      })
      .then(data => {
        console.log("Album data:", data);
      })
      .catch(console.error);
  }, [albumId, accessToken]);

  if (!album) return <div>No album</div>;

  return (
    <div className="w-48 p-4 bg-neutral-800 rounded-lg shadow hover:scale-105 transition-transform duration-300">
      <img src={album.imageUrl} alt={album.name} className="rounded-lg mb-3" />
      <h3 className="text-white font-bold text-sm">{album.name}</h3>
      <p className="text-gray-400 text-xs">{album.artist}</p>
    </div>
  );
}
