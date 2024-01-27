import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { AppDispatch, RootState } from "../redux/store";
import { fetchShow } from "../redux/show/showActions";
import { fetchEpisodes } from "../redux/episodes/episodesActions";
import styles from "./styles.module.css";
import Sticky from "react-stickynode";
import SeeMore from "../components/SeeMore";
import usePreserveScroll from "../hooks/usePreserveScroll";
import ShowImage from "../assets/images/show-cover.webp";
import ShowGenre from "./components/ShowGenres";
import ShowEpisodes from "./components/ShowEpisodes";

export default function Home() {
  usePreserveScroll("home");
  const dispatch = useDispatch<AppDispatch>();
  const { show, loading } = useSelector(
    (state: RootState) => state.show,
    shallowEqual
  );
  const { episodes, loading: episodesLoading } = useSelector(
    (state: RootState) => state.episodes,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchShow());
    dispatch(fetchEpisodes());
  }, [dispatch]);

  return (
    <div>
      {show && (
        <Card className="mb-5 border-0">
          <Card.Body>
            <Row>
              <Col md="4" className="mb-4">
                <Sticky enabled={true} top={20} bottomBoundary="episodes-col">
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

                  <SeeMore
                    text={show.summary}
                    limit={230}
                    className="text-muted small"
                  />

                  <div className="mt-2">
                    <ul className="list-unstyled">
                      {show.genres.map((genre) => (
                        <ShowGenre key={genre} genre={genre} />
                      ))}
                    </ul>
                  </div>
                </Sticky>
              </Col>
              <Col md="8" className="episodes-col">
                <div>
                  {episodesLoading && <p>Loading episodes...</p>}
                  {Array.isArray(episodes) && (
                    <>
                      <ShowEpisodes episodes={episodes} />
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
