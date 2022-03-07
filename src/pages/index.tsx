import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import Layout from "../components/Layout"
import requests from "../utils/requests"

const Home: NextPage = ({ results }) => {
  const request = Object.entries(requests)
  console.log(typeof request[0])
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main></main>
      </Layout>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  let genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())
  return {
    props: {
      results: request.results,
    },
  }
}
