import Navbar from "../components/navbar"

function Home() {
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

    </div>
  )
}

export default Home