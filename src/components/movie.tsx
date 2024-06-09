"use client";
import Link from "next/link";
import styles from "./movie.module.css";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface IMovies {
  id: number;
  poster_path: string;
  title: string;
}

interface Movies {
  movie: IMovies[];
}

export default function Movie({ movie }: Movies) {
  
  return (
    <div className={styles.container}>
      <Swiper
        pagination={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {movie.map((data) => (
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.movie}>
              <img src={data.poster_path} />
              <Link href={`/movies/${data.id}`}>{data.title}</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
