import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { AppDispatch, RootState } from "../redux/store";
import { fetchShow } from "../redux/show/showActions";
import { fetchEpisodes } from "../redux/episodes/episodesActions";
import Sticky from "react-stickynode";
import usePreserveScroll from "../hooks/usePreserveScroll";
import ShowEpisodes from "./components/ShowEpisodes";
import { SHOW_ID } from "../constants";
import ShowDetails from "./components/ShowDetails";
import Loading from "./components/Loading";

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
    dispatch(fetchShow(SHOW_ID));
    dispatch(fetchEpisodes(SHOW_ID));
  }, [dispatch]);

  return (
    <div>
      {loading && <Loading />}

      {show && (
        <Card className="mb-5 border-0">
          <Card.Body>
            <Row>
              <Col md="4" className="mb-4">
                <Sticky enabled={true} top={20} bottomBoundary="episodes-col">
                  <ShowDetails show={show} />
                </Sticky>
              </Col>
              <Col md="8" className="episodes-col">
                <div>
                  {episodesLoading && <Loading />}
                  {episodes && <ShowEpisodes episodes={episodes} />}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
