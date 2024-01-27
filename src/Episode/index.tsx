import React from "react";
import { useParams } from "react-router-dom";

export default function Episodes() {
  const { id } = useParams();

  return <div>Episodes {id}</div>;
}
