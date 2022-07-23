import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";


const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;
  // useCallback() coz this function is passes as props and that props is used as depenecy in useEffect which will leads this fucntion to create again and again
  const onAddedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    comments = (
      <div className="centered">
        {" "}
        <LoadingSpinner />{" "}
      </div>
    );
  }
  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = <CommentsList comments={loadedComments} />
  }
  if(status === 'completed' && (!loadedComments && loadedComments.length === 0)){
    comments = <p className="centered">No comments added yet</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={onAddedCommentHandler}
        />
      )}
      {/* <p>Comments...</p> */}
      <p>{comments}</p>
    </section>
  );
};

export default Comments;
