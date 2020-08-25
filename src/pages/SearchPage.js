import React from 'react'
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // https://developers.google.com/custom-search/v1/using_rest

  // https://cse.google.com/cse/create/new
  console.log(data);
  return (
    <div className="searchPage">

      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>

      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
