import { useNavigate } from "react-router-dom"

function FrontPage() {

  const navigate = useNavigate()
  const handleGetStarted = () =>
  {
    console.log("Get Started clicked")
    navigate("/home")


  }

  return (
    <div className="min-h-screen w-full bg-[#0b111e] text-white flex flex-col justify-between">

      {/* Heading */}
      <div className="p-[30px]">
        <p className="text-[1.5rem] font-bold tracking-[1px]">
          OWN THE STAGE
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col items-center gap-[15px] mb-[8vh]">

        <div className="text-[#00ffff] text-[18px] animate-bounce">
          ↑
        </div>

        <button
           type = "button" onClick={handleGetStarted}
          className="
            text-[16px]
            font-semibold
            py-3
            px-10
            min-w-[140px]
            text-[#00ffff]
            bg-[rgb(177,73,109)]
            border-2
            border-[#9944aa]
            rounded-lg
            cursor-pointer
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_15px_#00ffff]
          "
        >
          Get Started
        </button>

      </div>

    </div>
  )
}

export default FrontPage