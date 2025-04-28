import Image from "next/image";

import RecentPlaylist from "@/components/recent-playlist";
import AlbumCard from "@/components/album-card";
import TrackCard from "@/components/track-card";
import ArtistCard from "@/components/artist-card";

import ActualPlaying from "@/components/actual-playing";

import ActualPlayingSmall from "@/components/actual-playing-small";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-black text-white">
      <header className="p-4 shrink-0">
      <a href="#" className="text-5xl font-mono font-bold bg-gradient-to-r
                     from-sky-300 via-indigo-300 to-rose-300
                     bg-clip-text text-transparent"
        >
          POLOFY
        </a>
      </header>

      <div className="flex flex-1 gap-4 px-2 pb-2 overflow-hidden">
        {/*/------------- block 1 -------------/*/}
        <section className="hidden md:block bg-zinc-900 rounded-md p-6 w-1/5 min-w-[230px] overflow-y-auto scrollbar-thin">
          <h2 className="font-mono font-bold mb-4">YOUR PLAYLIST</h2>
        </section>

        {/*/------------- block 2 -------------/*/}
        <section className="bg-zinc-900 rounded-md p-6 flex-1 overflow-y-auto scrollbar-thin">  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12 bg-neutral-900 p-4">
            <RecentPlaylist image="/track-img/DontStartNow.jpg" title="Future Nostalgia" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
            <RecentPlaylist image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" />
          </div>

          <h2 className="font-mono font-bold mb-4">MADE FOR YOU</h2>
          <div className="grid grid-flow-col gap-4 overflow-x-auto pb-12 scrollbar-thin">
            <AlbumCard image="/album-img/AbbeyRoad.jpg" title="Abbey Road" artist="The Beatles" />
            <AlbumCard image="/album-img/Bad.jpg" title="Bad" artist="Michael Jackson" />
            <AlbumCard image="/album-img/CowboyCarter.jpg" title="COWBOY CARTER" artist="Beyoncé" />
            <AlbumCard image="/album-img/DawnFM.jpg" title="Dawn FM" artist="The Weeknd" />
            <AlbumCard image="/album-img/MyBeautifulDarkTwistedFantasy.jpg" title="My Beautiful Dark Twisted Fantasy" artist="Kanye West" />
            <AlbumCard image="/album-img/PurpleRain.jpg" title="Purple Rain" artist="Prince" />
          </div>

          <h2 className="font-mono font-bold mb-4">POPULAR TRACK</h2>
          <div className="grid grid-flow-col gap-4 overflow-x-auto pb-12 scrollbar-thin">
            <TrackCard image="/track-img/ComeAsYouAre.jpg" title="Come As You Are" artist="Nirvana" />
            <TrackCard image="/track-img/Creep.jpg" title="Crepp" artist="Radiohead" />
            <TrackCard image="/track-img/D4C.jpg" title="Dirty Deeds Done Dirt Cheap" artist="AC/DC" />
            <TrackCard image="/track-img/LoveTrain.jpg" title="Love Train" artist="The O'Jay" />
            <TrackCard image="/track-img/Time.jpg" title="Time" artist="Pink Floyd" />
            <TrackCard image="/track-img/WeFellInLoveInOctober.jpg" title="We Fell In Love In October" artist="Girl in Red" />
          </div>

          <h2 className="font-mono font-bold mb-4">POPULAR ARTIST</h2>
          <div className="grid grid-flow-col gap-4 overflow-x-auto pb-12 scrollbar-thin">
            <ArtistCard image="/artist-img/2PAC.jpg" artist="2PAC" />
            <ArtistCard image="/artist-img/AceOfBase.jpg" artist="Ace of Bases" />
            <ArtistCard image="/artist-img/Blondie.jpg" artist="Blondie" />
            <ArtistCard image="/artist-img/BritneySpears.jpg" artist="Britney Spears" />
            <ArtistCard image="/artist-img/Gorillaz.jpg" artist="Gorillaz" />
            <ArtistCard image="/artist-img/GunsN'Roses.jpg" artist="Guns N' Roses" />
          </div>

          <h2 className="font-mono font-bold mb-4">POPULAR ALBUM</h2>
          <div className="grid grid-flow-col gap-4 overflow-x-auto pb-12 scrollbar-thin">
            <AlbumCard image="/album-img/AbbeyRoad.jpg" title="Abbey Road" artist="The Beatles" />
            <AlbumCard image="/album-img/Bad.jpg" title="Bad" artist="Michael Jackson" />
            <AlbumCard image="/album-img/CowboyCarter.jpg" title="COWBOY CARTER" artist="Beyoncé" />
            <AlbumCard image="/album-img/DawnFM.jpg" title="Dawn FM" artist="The Weeknd" />
            <AlbumCard image="/album-img/MyBeautifulDarkTwistedFantasy.jpg" title="My Beautiful Dark Twisted Fantasy" artist="Kanye West" />
            <AlbumCard image="/album-img/PurpleRain.jpg" title="Purple Rain" artist="Prince" />
          </div>
        </section>

        {/*/------------- block 3 -------------/*/}
        <section className="hidden md:block bg-zinc-900 rounded-md p-6 w-1/4 min-w-[230px] overflow-y-auto scrollbar-thin">
          <h2 className="font-mono font-bold mb-4">BEST SONGS EVER</h2>
          <ActualPlaying image="/track-img/DontStartNow.jpg" title="Don't Start Now" artist="Dua Lipa" />
        </section>
      </div>

      <div className="flex h-15 pb-2">
        {/*/------------- Music Info -------------/*/}
        <section className="flex w-1/4 items-center justify-start p-2">
          <ActualPlayingSmall image="/track-img/DontStartNow.jpg" title="Don't Start Now" artist="Dua Lipa" />
        </section>

        {/*/------------- Music Status -------------/*/}
        <section className="hidden md:flex flex-1 items-center justify-center">
          <div className="h-1 w-170 bg-gray-200 rounded-full mb-4 dark:bg-gray-700">
            <div className="bg-white h-1 w-90 rounded-full"></div>
          </div>
        </section>

        {/*/------------- Settings -------------/*/}
        <section className="hidden md:flex w-1/4 items-center justify-end p-2">
          <div className="h-1 w-30 bg-gray-200 rounded-full mb-4 dark:bg-gray-700">
            <div className="bg-white h-1 w-20 rounded-full"></div>
          </div>
        </section>
      </div>

    </main>
  );
}
