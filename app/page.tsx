import Image from "next/image";
import AlbumCard from "@/components/AlbumCard";

export default function Home() {
  return (
    <main className="h-full w-full bg-black text-white">
      <header className="p-6">
      <a href="#" className="text-5xl font-mono font-bold bg-gradient-to-r
                     from-sky-300 via-indigo-300 to-rose-300
                     bg-clip-text text-transparent"
        >
          POLOFY
        </a>
      </header>

      <div className="grid grid-cols-12 gap-4 px-2">
        {/*/------------- block 1 -------------/*/}
        <section className="bg-zinc-900 rounded-md p-6 col-span-3">
          <h2 className="font-mono font-bold mb-4">YOUR PLAYLIST</h2>
        </section>

        {/*/------------- block 2 -------------/*/}
        <section className="bg-zinc-900 rounded-md p-6 col-span-9">
          <h2 className="font-mono font-bold mb-4">POPULAR TITLE</h2>
            <div className="grid grid-flow-col auto-cols-[160px] gap-4 overflow-x-auto pb-2">
            </div>

          <h2 className="font-mono font-bold mb-4">POPULAR ARTIST</h2>
            <div className="grid grid-flow-col auto-cols-[160px] gap-4 overflow-x-auto pb-2">
            </div>

          <h2 className="font-mono font-bold mb-4">POPULAR ALBUM</h2>
            <div className="grid grid-flow-col auto-cols-[160px] gap-4 overflow-x-auto pb-2">
              <AlbumCard image="/album-img/MyBeautifulDarkTwistedFantasy.jpg" title="My Beautiful Dark Twisted Fantasy" artist="Kanye West" />
              <AlbumCard image="/album-img/DawnFM.jpg" title="Dawn FM" artist="The Weeknd" />
              <AlbumCard image="/album-img/PurpleRain.jpg" title="Purple Rain" artist="Prince" />
              <AlbumCard image="/album-img/CowboyCarter.jpg" title="COWBOY CARTER" artist="Beyoncé" />
            </div>

          <h2 className="font-mono font-bold mb-4">RECOMMENDED FOR YOU</h2>
            <div className="grid grid-flow-col auto-cols-[160px] gap-4 overflow-x-auto pb-2">
            </div>
        </section>
      </div>
    </main>
  );
}
