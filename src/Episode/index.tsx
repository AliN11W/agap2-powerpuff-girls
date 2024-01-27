import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchEpisodeDetails } from "../redux/episodes/episodeDetailsActions";
import ArrowBack from "../assets/icons/arrow-left.svg";
import sanitizeHtml from "sanitize-html";
import { Col, Row } from "react-bootstrap";
import { RESET_EPISODE_DETAILS } from "../redux/episodes/episodeDetailsTypes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Episodes() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { episodeDetails, loading } = useSelector(
    (state: RootState) => state.episodeDetails
  );

  React.useEffect(() => {
    // Redirect to 404 ideally
    if (!id) return;

    dispatch(fetchEpisodeDetails(id));

    return () => {
      // Reset episode details on unmount
      dispatch({ type: RESET_EPISODE_DETAILS });
    };
  }, [dispatch, id]);

  return (
    <div>
      <div className="mb-5">
        <Link to="/" className="btn btn-primary btn-sm rounded">
          <img
            src={ArrowBack}
            alt="Back to Home"
            width={25}
            height={25}
            className="me-1"
          />
          Back to Home
        </Link>
      </div>
      {episodeDetails && (
        <Row>
          <Col md="4">
            {loading && (
              <Skeleton width={360} height={200} className="rounded" />
            )}
            <img
              src={episodeDetails.image.original}
              alt={episodeDetails.name}
              className="img-fluid rounded mb-3"
              // Setting width and height to prevent layout shift
              width={360}
              height={200}
            />
          </Col>
          <Col md="8">
            <div>
              {loading && (
                <Skeleton className="rounded" height={40} width={400} />
              )}
              <h2>{episodeDetails.name}</h2>
              {loading && <Skeleton count={5} className="rounded" />}
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(episodeDetails.summary, {
                    allowedTags: ["b", "em", "strong"],
                    allowedAttributes: false,
                    parseStyleAttributes: false,
                  }),
                }}
              ></p>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}
