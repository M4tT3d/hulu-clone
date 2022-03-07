import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { forwardRef } from "react"

interface thumbnailProps {
  result: {
    poster_path?: string | null
    adult?: boolean
    overview?: string
    release_date?: string
    genre_ids?: Array<number>
    id?: number
    original_title?: string
    original_language?: string
    title?: string
    backdrop_path?: string | null
    popularity?: number
    vote_count?: number
    video?: boolean
    vote_average?: number
  }
}

const Thumbnail = forwardRef<HTMLDivElement, thumbnailProps>(
  ({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
      <div
        className="group cursor-pointer transition duration-200 ease-in
            hover:z-50 sm:hover:scale-105"
        ref={ref}
      >
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          layout="responsive"
          alt=""
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="max-w-md truncate">{result.overview}</p>
          <h2
            className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out
       group-hover:font-bold"
          >
            {result.title || result.original_title}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {result.release_date}
            <ThumbUpIcon className="mx-2 h-5" />
            {result.vote_count}
          </p>
        </div>
      </div>
    )
  }
)

Thumbnail.displayName = "Thumbnail"

export default Thumbnail
