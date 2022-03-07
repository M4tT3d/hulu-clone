import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

interface contentProps {
  results: [
    {
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
  ]
}

function Content({ results }: contentProps): JSX.Element {
  return (
    <main>
      <FlipMove
        className="3xl:flex my-10 flex-wrap justify-center px-5 sm:grid 
        md:grid-cols-2 xl:grid-cols-3"
      >
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </FlipMove>
    </main>
  )
}

export default Content
