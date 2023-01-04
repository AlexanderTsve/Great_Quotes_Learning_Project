import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Layout from "./components/layout/Layout";
import { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <Quotes />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="/new_quote">
              <NewQuote />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
