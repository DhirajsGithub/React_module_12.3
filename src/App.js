// import { Navigate, Route, Routes, Switch } from "react-router-dom"
import { Routes, Route, Navigate } from "react-router-dom";
import React, {Suspense} from "react";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Layouts from "./components/layout/Layouts";
// import AllQuotes from "./Pages/AllQuotes";
// import NewQuote from "./Pages/NewQuote";
// import QuoteDetail from "./Pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// adding lazy loading
const NewQuote = React.lazy(()=>import("./Pages/NewQuote"));
// downloading this code when needed, the download will take compule of milli seconds hence need to wrap out components with suspense component
const QuoteDetail = React.lazy(()=> import("./Pages/QuoteDetail"));
const AllQuotes = React.lazy(()=> import("./Pages/AllQuotes"));

function App() {
  return (
    <Layouts>
    <Suspense fallback={ <div className="centered"><LoadingSpinner/></div> }>
    <Routes>
    <Route path="/" render={() => <Navigate to="/quotes" />} />
      <Route path="/quotes" element={<AllQuotes/>} />
      <Route path="/quotes/:quoteId/*" element={ <QuoteDetail/>} >
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="/new-quote"  element={<NewQuote/>} />
    </Routes>
    </Suspense>
    </Layouts>
  );
}

export default App;
