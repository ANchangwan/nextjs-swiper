import MovieInfo from "@/components/movieInfo";
import styles from "./detail.module.css";

interface IParams {
  params: { id: string };
}

export default async function Movie({ params: { id } }: IParams) {
  console.log(id);
  return (
    <div className={styles.container}>
      <MovieInfo id={id} />
    </div>
  );
}
