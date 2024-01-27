import React, { useState } from "react";
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
  const [showMore, setShowMore] = useState(false);

  // The text that user sees
  const [sanitizedText] = useState(() =>
    sanitizeHtml(text, {
      allowedTags: ["b", "em", "strong"],
      allowedAttributes: false,
      parseStyleAttributes: false,
    })
  );

  // The text that we use to check if it's already short enough
  const [pureText] = useState(() =>
    sanitizeHtml(text, {
      allowedTags: [],
      allowedAttributes: false,
      parseStyleAttributes: false,
    })
  );

  // Is the text already short enough? Return it as is
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
