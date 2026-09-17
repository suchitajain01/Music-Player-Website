import React from "react";

const playlists = [
  {
    name: "Lofi Romantic",
    image: "/music1.jpg",
    link: "/lofi-Romantic.html",
  },
  {
    name: "Bollywood Hits",
    image: "/music2.jpg",
    link: "/bollywood-hits.html",
  },
  {
    name: "Punjabi Tadka",
    image: "/music3.jpg",
    link: "/punjabi-tadka.html",
  },
  {
    name: "Global Top Hits",
    image: "/music4.jpg",
    link: "/Global-Top50.html",
  },
  {
    name: "Best of 2026",
    image: "/music.jpg",
    link: "/Best-of-2026.html",
  },
  {
    name: "Main Character Vibes",
    image: "/music6.jpg",
    link: "/Main-Character-vibes.html",
  },
  {
    name: "Weekend Top Ones",
    image: "/music7.jpg",
    link: "/Weekand-Top-ones.html",
  },
  {
    name: "Wedding Magic",
    image: "/music8.jpg",
    link: "/Wedding-masala.html",
  },
  {
    name: "Long Drive",
    image: "/music9.jpg",
    link: "/LongDrive.html",
  },
  {
    name: "30 Hits of Arijit",
    image: "/music10.jpg",
    link: "/30HitsofArjit.html",
  },
  {
    name: "90's Road Trip",
    image: "/music 11.jpg",
    link: "/00'S-dance-bollywood.html",
  },
  {
    name: "I-Pop Sad Feels",
    image: "/music 12.jpg",
    link: "/sadFeels.html",
  },
];

function TopPlaylists() {
  return (
    <section className="min-h-screen bg-[url('/bgimage2.jpg')] bg-cover bg-center bg-fixed px-8 py-10">

      <h1 className="mb-8 text-3xl font-bold text-white">
        Top Playlists
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {playlists.map((playlist, index) => (
          <a
            key={index}
            href={playlist.link}
            className="group w-full"
          >
            <div className="overflow-hidden rounded-lg">

              <img
                src={playlist.image}
                alt={playlist.name}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
              />

            </div>

            <span className="mt-3 block text-lg font-medium text-gray-100 transition group-hover:text-white">
              {playlist.name}
            </span>
          </a>
        ))}

      </div>
    </section>
  );
}

export default TopPlaylists;