import Navbar from "../components/navbar"
import { Link } from "react-router-dom"

function Home() {

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
    <div className="min-h-screen bg-[#0b111e] text-white">

      <Navbar />

      <main className="px-6 py-10">

        <h1 className="text-4xl font-bold">
          Welcome to the Music App
        </h1>

        <p className="mt-4 text-gray-400">
          Discover your favorite music, playlists and artists.
        </p>

      </main>

      {/* ================= FAVORITE ARTISTS ================= */}

      <section className="mt-14 px-6">

        <h2 className="mb-6 text-2xl font-semibold">
          Favorite Artists
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-5 scrollbar-hide">

          {artists.map((artist, index) => (
            <a
              href="#"
              key={index}
              className="min-w-[150px] text-center transition duration-200 hover:scale-105"
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

      {/* ================= GLOBAL TOP 20 ================= */}


      <section className="mt-14 px-6">

        <h2 className="mb-6 text-2xl font-semibold">
          Playlists
        </h2>

        <div className="flex gap-6">

          <Link
            to="/global-top-20"
            className="group block w-[220px]"
          >

            {/* Folder image */}
            <div className="flex h-[200px] flex-col justify-end rounded-xl bg-gradient-to-br from-pink-500/40 to-orange-500/40 p-5 transition duration-300 group-hover:scale-105">

              <div className="flex h-full items-end">

                <div>
                  <p className="text-sm text-gray-300">

                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Global Top 20
                  </h3>
                </div>

              </div>

            </div>

            <p className="mt-3 font-medium">
              Global Top 20
            </p>

            <p className="text-sm text-gray-400">
              Top songs worldwide
            </p>

          </Link>



          <Link
            to="/likedSongs"
            className="group block w-[220px]"
          >

            {/* Folder image */}
            <div className="flex h-[200px] flex-col justify-end rounded-xl bg-gradient-to-br from-pink-500/40 to-orange-500/40 p-5 transition duration-300 group-hover:scale-105">

              <div className="flex h-full items-end">

                <div>
                  <p className="text-sm text-gray-300">

                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Liked Songs
                  </h3>
                </div>

              </div>

            </div>

            <p className="mt-3 font-medium">
              Liked Songs
            </p>

            <p className="text-sm text-gray-400">
              Your favorite tracks
            </p>

          </Link>



          <Link
            to="/likedSongs.jsx"
            className="group block w-[220px]"
          >

            {/* Folder image */}
            <div className="flex h-[200px] flex-col justify-end rounded-xl bg-gradient-to-br from-pink-500/40 to-orange-500/40 p-5 transition duration-300 group-hover:scale-105">

              <div className="flex h-full items-end">

                <div>
                  <p className="text-sm text-gray-300">

                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Most Listened Songs
                  </h3>
                </div>

              </div>

            </div>

            <p className="mt-3 font-medium">

            </p>

            <p className="text-sm text-gray-400">

            </p>

          </Link>
</div>
 </section>
  </div>
  )
}

export default Home