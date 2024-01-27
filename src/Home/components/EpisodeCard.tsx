import React from "react";
import { Card } from "react-bootstrap";
import { Episode } from "../../redux/episodes/episodesTypes";
import { limitText } from "../../utils/string";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Card>
      {/* Some episodes don't have images */}
      {episode.image !== null && (
        <Card.Img variant="top" src={episode.image.medium} alt={episode.name} />
      )}
      <Card.Body>
        <h2 className={styles.episodeName}>{episode.name}</h2>
        <small>
          Season {episode.season} Episode {episode.number}
        </small>
        <p
          className="text-muted small"
          // Sanitize HTML to prevent XSS attacks
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
