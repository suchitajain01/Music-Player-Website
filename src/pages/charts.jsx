
function Charts() {

  const songs = [
    ["song1.jpg", "Dracula", "Tame Impala"],
    ["song2.jpg", "Die With A Smile", "Lady Gaga, Bruno Mars"],
    ["song3.jpg", "Birds Of A Feather", "Billie Eilish"],
    ["song4.jpg", "Swim", "Chase Atlantic"],
    ["song5.jpg", "Gehra Hua", "Shashwat Sachdev - Gehra Hua"],
    ["song6.jpg", "Homewrecker", "sombr"],
    ["song7.jpg", "Risk It All", "Bruno Mars"],
    ["song8.jpg", "Oplalite", "Taylor Swift"],
    ["song9.jpg", "CHANEL", "Tyla"],
    ["song10.jpg", "WILDFLOWER", "Billie Eilish"],
    ["song11.jpg", "No One Noticed", "The Marías"],
    ["song12.jpg", "Ordinary", "Alex Warren"],
    ["music13.jpg", "Beautiful Things", "Benson Boone"],
    ["music14.jpg", "Folded", "Kehlani"],
    ["song15.jpg", "Sapphire", "Ed Sheeran"],
    ["song16.jpg", "End of Beginning", "Djo"],
    ["alone. pt II.jpg", "Alone, Pt. II", "Alan Walker, Ava Max"],
    ["music18.jpg", "Bairan", "Tame Impala"],
    ["music19.jpg", "Naal Nachna", "Banjaare"],
    ["music20.jpg", "DTMF", "Bad Bunny"],
  ]

  const playlists = [
    "Chatpate Gaane",
    "Dance Hip Hop",
    "Cool Vibes",
    "Feel Good Bollywood",
    "Happy 2026",
    "Trending Valentine Hits",
  ]

  const artists = [
    ["artist1.jpg", "Lana Del Rey"],
    ["artist2.jpg", "Darshan Raval"],
    ["artist3.jpg", "The Weeknd"],
    ["artist4.jpg", "Alan Walker"],
    ["artist5.jpg", "Taylor Swift"],
    ["artist6.jpg", "Billie Eilish"],
    ["artist7.jpg", "Arijit Singh"],
    ["artist8.jpg", "Karan Aujla"],
    ["artist9.jpg", "Honey Singh"],
    ["artist10.jpg", "Jubin Nautiyal"],
    ["artist11.jpg", "Cigarettes After Sex"],
    ["artist12.jpg", "Ed Sheeran"],
    ["artist13.jpg", "Rauf & Faik"],
  ]

  return (
    <div
      className="min-h-screen bg-[#202135] bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: "url('/images/backgrounds/bgimage2.jpg')"
      }}
    >

      <Navbar />

      <main className="px-8 py-8">

        {/* Page Heading */}
        <h1 className="text-3xl font-bold tracking-wide">
          CHARTS_TOP SONGS
        </h1>

        <p className="mt-2 text-gray-300">
          100k Followers - 20 Songs
        </p>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">

          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-black transition hover:scale-105">
            ▶ Play
          </button>

          <button className="rounded-lg border border-gray-400 px-4 py-2 transition hover:bg-white/10">
            <i className="fa-regular fa-heart"></i>
          </button>

          <button className="rounded-lg border border-gray-400 px-4 py-2 transition hover:bg-white/10">
            <i className="fa-solid fa-ellipsis"></i>
          </button>

        </div>


        {/* ================= SONGS ================= */}

        <section className="mt-10">

          <h2 className="mb-5 text-2xl font-semibold">
            Global Top 20
          </h2>

          <ol className="space-y-3">

            {songs.map((song, index) => (

              <li
                key={index}
                className="flex items-center gap-5 rounded-lg px-4 py-2 transition hover:bg-white/10"
              >

                {/* Number */}
                <span className="w-6 text-gray-400">
                  {index + 1}
                </span>

                {/* Song Image */}
                <img
                  src={`/images/songs/${song[0]}`}
                  alt={song[1]}
                  className="h-[50px] w-[50px] rounded-md object-cover"
                />

                {/* Song Name */}
                <span className="font-medium">
                  {song[1]}
                </span>

                {/* Artist */}
                <span className="ml-auto text-sm text-gray-400">
                  {song[2]}
                </span>

              </li>

            ))}

          </ol>

        </section>


        {/* ================= PLAYLISTS ================= */}

        <section className="mt-14">

          <h2 className="mb-6 text-2xl font-semibold">
            Currently Trending Playlists
          </h2>

          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">

            {playlists.map((playlist, index) => (

              <a
                href="#"
                key={index}
                className="min-w-[180px] transition hover:scale-105"
              >

                <div className="h-[180px] w-[180px] rounded-xl bg-white/10">
                  {/* Add playlist image here */}
                </div>

                <p className="mt-3 font-medium">
                  {playlist}
                </p>

              </a>

            ))}

          </div>

        </section>


        {/* ================= ARTISTS ================= */}

        <section className="mt-14">

          <h2 className="mb-6 text-2xl font-semibold">
            Artists
          </h2>

          <div className="flex gap-10 overflow-x-auto pb-5">

            {artists.map((artist, index) => (

              <a
                href="#"
                key={index}
                className="min-w-[150px] text-center transition hover:scale-105"
              >

                <img
                  src={`/images/artists/${artist[0]}`}
                  alt={artist[1]}
                  className="h-[150px] w-[150px] rounded-full object-cover"
                />

                <p className="mt-3 font-medium">
                  {artist[1]}
                </p>

              </a>

            ))}

          </div>

        </section>

      </main>

    </div>
  )
}

export default Charts