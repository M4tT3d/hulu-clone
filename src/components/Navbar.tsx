import requests from "../utils/requests"
import { useRouter } from "next/router"

function Navbar(): JSX.Element {
  const router = useRouter()
  return (
    <nav className="relative">
      <div
        className="flex space-x-10 overflow-y-hidden overflow-x-scroll
        whitespace-nowrap px-10 text-2xl scrollbar-hide sm:space-x-20 sm:px-20"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-150 last:pr-24 
            hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 h-10 w-1/12 
        bg-gradient-to-l from-[#06202A]"
      />
    </nav>
  )
}
export default Navbar
