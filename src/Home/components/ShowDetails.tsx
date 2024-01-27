import React from "react";
import { Show } from "../../redux/show/showTypes";
import SeeMore from "../../components/SeeMore";
import ShowImage from "../../assets/images/show-cover.webp";
import ShowGenre from "../components/ShowGenres";
import styles from "./styles.module.css";

export default function ShowDetails({ show }: { show: Show }) {
  return (
    <>
      <img
        src={ShowImage}
        alt={show.name}
        className="img-fluid rounded w-100"
        // Setting width and height to prevent layout shift
        width={400}
        height={616}
        loading="lazy"
      />

      <h1 className={styles.showTitle}>{show.name}</h1>

      <SeeMore text={show.summary} limit={230} className="text-muted small" />

      <div className="mt-2">
        <ul className="list-unstyled">
          {show.genres.map((genre) => (
            <ShowGenre key={genre} genre={genre} />
          ))}
        </ul>
      </div>
    </>
  );
}
