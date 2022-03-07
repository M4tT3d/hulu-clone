import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import Content from "../components/Content"
import Layout from "../components/Layout"
import requests from "../utils/requests"

interface indexProps {
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

const Home: NextPage<indexProps> = ({ results }: indexProps) => {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Content results={results} />
      </Layout>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  let genre = context.query.genre
  if (typeof genre !== "string") {
    genre = "fetchTrending"
  }
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre].url}`
  ).then((res) => res.json())
  return {
    props: {
      results: request.results,
    },
  }
}
