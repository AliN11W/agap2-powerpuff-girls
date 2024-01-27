import React from "react";
import { Card } from "react-bootstrap";
import { Episode } from "../../redux/episodes/episodesTypes";
import { limitText } from "../../utils/string";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Card>
      {episode.image !== null && (
        <Card.Img variant="top" src={episode.image.medium} alt={episode.name} />
      )}
      <Card.Body>
        <h4>{episode.name}</h4>
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
          className="btn btn-outline-info rounded w-100"
        >
          View Episode
        </Link>
      </Card.Body>
    </Card>
  );
}
