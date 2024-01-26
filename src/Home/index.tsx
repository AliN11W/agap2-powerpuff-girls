import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sanitizeHtml from "sanitize-html";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { AppDispatch, RootState } from "../redux/store";
import { fetchShow } from "../redux/show/showActions";
import { fetchEpisodes } from "../redux/episodes/episodeActions";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { show, loading } = useSelector((state: RootState) => state.show);
  const { episodes } = useSelector((state: RootState) => state.episodes);

  useEffect(() => {
    dispatch(fetchShow());
    dispatch(fetchEpisodes());
  }, [dispatch]);

  return (
    <div>
      {show && (
        <Card>
          <Card.Body>
            <Row>
              <Col md="4">
                <img
                  src={show.image.original}
                  alt={show.name}
                  className="img-fluid rounded"
                  // Setting width and height to prevent layout shift
                  width={680}
                  height={1000}
                />

                <div className="mt-2">
                  <ul className="list-unstyled">
                    {show.genres.map((genre) => (
                      <Badge key={genre} className="me-2" bg="primary" as="li">
                        {genre}
                      </Badge>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col md="8">
                <h2>{show.name}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(show.summary, {
                      allowedTags: ["p", "b", "em", "strong"],
                      allowedAttributes: false,
                      parseStyleAttributes: false,
                    }),
                  }}
                ></p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
