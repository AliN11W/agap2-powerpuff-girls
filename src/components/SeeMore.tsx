import React from "react";
import { Button } from "react-bootstrap";
import sanitizeHtml from "sanitize-html";

export default function SeeMore({
  text,
  limit,
  className = "",
}: {
  text: string;
  limit: number;
  className?: string;
}) {
  const [showMore, setShowMore] = React.useState(false);
  const [sanitizedText] = React.useState(() =>
    sanitizeHtml(text, {
      allowedTags: ["b", "em", "strong"],
      allowedAttributes: false,
      parseStyleAttributes: false,
    })
  );
  const [pureText] = React.useState(() =>
    sanitizeHtml(text, {
      allowedTags: [],
      allowedAttributes: false,
      parseStyleAttributes: false,
    })
  );

  if (pureText.length <= limit) {
    return (
      <p
        className="d-inline"
        dangerouslySetInnerHTML={{ __html: sanitizedText }}
      ></p>
    );
  }

  return (
    <>
      <div
        className={`d-inline ${className}`}
        dangerouslySetInnerHTML={{
          __html: showMore
            ? sanitizedText
            : pureText.substring(0, limit) + "...",
        }}
      ></div>
      <Button
        variant="link"
        size="sm"
        className="p-0 ms-1 d-inline text-decoration-none"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read less" : "Read more"}
      </Button>
    </>
  );
}
