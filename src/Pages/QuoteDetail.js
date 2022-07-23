import React, { Fragment, useEffect } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  // const match = useRouteMatch();
  const match = useLocation();
  console.log(match);
  // pathname (useLocation)  path(useRouteMatch)

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  // const quote = DUMMY_QUOTES.find((quote)=> quote.id === params.quoteId)
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    <p className="centered focused">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No quote Found !</p>;
  }
  // if(!quote){
  //   return <p>No quote Found !</p>
  // }
  return (
    <Fragment>
      {/* <h1>QuoteDetail</h1>
        <p>{params.quoteId}</p> */}
      {/* nested Routting  */}
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* <Route path={`/quotes/${params.quoteId}/`} exact> */}

      <Link className="btn--flat" to="comments">
          Load Comments
        </Link>

        <Outlet />
      {/* <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes> */}
      
    </Fragment>
  );
};

export default QuoteDetail;
