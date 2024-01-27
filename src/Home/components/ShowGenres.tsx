import React from "react";
import { Badge } from "react-bootstrap";

export default function ShowGenre({ genre }: { genre: string }) {
  return (
    <Badge key={genre} className="me-2" bg="primary" as="li">
      {genre}
    </Badge>
  );
}
