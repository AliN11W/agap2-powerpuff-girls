import React, { useEffect, useState } from "react";
import {
  Episode,
  SET_VISIBLE_EPISODES_NUMBER,
} from "../../redux/episodes/episodesTypes";
import Masonry from "react-masonry-css";
import styles from "../styles.module.css";
import EpisodeCard from "./EpisodeCard";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 2,
  500: 1,
};

export default function ShowEpisodes({ episodes }: { episodes: Episode[] }) {
  const dispatch = useDispatch<AppDispatch>();
  const visibleItems = useSelector(
    (state: RootState) => state.episodes.visibleItems
  );
  const [visibleEpisodes, setVisibleEpisodes] = useState(
    () => visibleItems || 9
  );

  const handleLoadMore = () => {
    setVisibleEpisodes((prev) => prev + 9);
  };

  useEffect(() => {
    dispatch({ type: SET_VISIBLE_EPISODES_NUMBER, payload: visibleEpisodes });
  }, [visibleEpisodes]);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGrid_column}
      >
        {episodes.slice(0, visibleEpisodes).map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </Masonry>

      {/* We could've implemented the "Load More" button in Home/index.tsx for the sake of modularity.
       * In that case, by updating the `visibleEpisodes` state, the whole component would re-render.
       */}
      <div className="text-center">
        {visibleEpisodes < episodes.length && (
          <Button
            variant="outline-warning"
            className="w-100 mt-3"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
}
