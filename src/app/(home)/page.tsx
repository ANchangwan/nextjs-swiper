import Movie from "@/components/movie";
import styles from "./home.module.css";

async function getMovie() {
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies`
  );
  const json = await response.json();
  return json;
}

export default async function Home() {
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      <Movie movie={movies} />
    </div>
  );
}
