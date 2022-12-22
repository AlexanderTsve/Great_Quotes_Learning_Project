import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Alex", text: "Learning React is great!" },
  { id: "q2", author: "Mike", text: "Learning React is hard.." },
  { id: "q3", author: "Maria", text: "Learning React is not hard at all!" },
];
const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
