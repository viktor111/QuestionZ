import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    console.log(quoteId);
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) return <p>No question foudn</p>;

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/questions/${params.quoteId}/`} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/questions/${params.quoteId}/comments`}
          >
            Show comments
          </Link>
        </div>
      </Route>
      <Route path={`/questions/${params.quoteId}/comments`}>
        <Comments quoteId={quoteId} />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
