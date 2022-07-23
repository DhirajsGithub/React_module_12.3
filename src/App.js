// import { Navigate, Route, Routes, Switch } from "react-router-dom"
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Layouts from "./components/layout/Layouts";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layouts>
    <Routes>
    <Route path="/" render={() => <Navigate to="/quotes" />} />
      <Route path="/quotes" element={<AllQuotes/>} />
      <Route path="/quotes/:quoteId/*" element={ <QuoteDetail/>} >
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="/new-quote"  element={<NewQuote/>} />
    </Routes>
    </Layouts>
  );
}

export default App;
