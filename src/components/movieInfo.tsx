import styles from "@/components/movieInfo.module.css";

export async function getMovie(id: string) {
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
  );
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} />
      <div className={styles.info}>
        <h1>{movie.original_title}</h1>
        <ul className={styles.genres}>
          {movie.genres.map((genre: any) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </div>
  );
}
