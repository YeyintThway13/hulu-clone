import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home(props) {
  return (
    <div className="">
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Nav />
      <Results results={props.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const {data} = await axios.get(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  return {
    props: { results: data.results },
  };
}
