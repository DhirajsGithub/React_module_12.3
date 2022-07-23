import React, { useEffect } from 'react'
import QuoteForm from "../components/quotes/QuoteForm"
import { useHistory, useNavigate } from 'react-router-dom'
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote)
  // const history = useHistory()
  const navigate = useNavigate()
  console.log(status)
  console.log(navigate);

  useEffect(()=>{
    if(status === "completed"){
      // history.push("/quotes")
      navigate("/quotes", {push: true})
    }
  }, [status, navigate]);
  const addQuoteHandler = (quoteData)=>{
    // console.log(quoteData)
    sendRequest(quoteData)
    // history.push("/quotes")

  }
  return (
    <QuoteForm isLoading = {status==='pending'} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote