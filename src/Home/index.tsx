import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sanitizeHtml from "sanitize-html";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { AppDispatch, RootState } from "../redux/store";
import { fetchShow } from "../redux/show/showActions";
import { fetchEpisodes } from "../redux/episodes/episodesActions";
import { limitText } from "../utils/string";
import styles from "./styles.module.css";
import Masonry from "react-masonry-css";
import Sticky from "react-stickynode";
import SeeMore from "../components/SeeMore";
import { Link } from "react-router-dom";
import usePreserveScroll from "../hooks/usePreserveScroll";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 2,
  500: 1,
};

export default function Home() {
  usePreserveScroll("home");
  const dispatch = useDispatch<AppDispatch>();
  const { show, loading } = useSelector((state: RootState) => state.show);
  const { episodes, loading: episodesLoading } = useSelector(
    (state: RootState) => state.episodes
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
              <Col md="4">
                <Sticky enabled={true} top={20} bottomBoundary="col-md-8">
                  <img
                    src={show.image.original}
                    alt={show.name}
                    className="img-fluid rounded"
                    // Setting width and height to prevent layout shift
                    width={400}
                    height={616}
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
                        <Badge
                          key={genre}
                          className="me-2"
                          bg="primary"
                          as="li"
                        >
                          {genre}
                        </Badge>
                      ))}
                    </ul>
                  </div>
                </Sticky>
              </Col>
              <Col md="8">
                <div className="px-4">
                  {episodesLoading && <p>Loading episodes...</p>}
                  {episodes && (
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className={styles.myMasonryGrid}
                      columnClassName={styles.myMasonryGrid_column}
                    >
                      {episodes.map((episode) => (
                        <div key={episode.id} className={styles.gridItem}>
                          <Card>
                            {episode.image !== null && (
                              <Card.Img
                                variant="top"
                                src={episode.image.medium}
                              />
                            )}
                            <Card.Body>
                              <h5>{episode.name}</h5>
                              <small>
                                Season {episode.season} Episode {episode.number}
                              </small>
                              <p
                                className="text-muted small"
                                dangerouslySetInnerHTML={{
                                  __html: limitText(
                                    sanitizeHtml(episode.summary, {
                                      allowedTags: [],
                                      allowedAttributes: false,
                                      parseStyleAttributes: false,
                                    }),
                                    100
                                  ),
                                }}
                              ></p>
                              <Link
                                to={`/episodes/${episode.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                View Episode
                              </Link>
                            </Card.Body>
                          </Card>
                        </div>
                      ))}
                    </Masonry>
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
