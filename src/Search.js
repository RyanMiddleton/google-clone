import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const history = useHistory();

  const search = e => {
    e.preventDefault();

    console.log('You hit the search button', input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })
    history.push('/search');
  };

  //Possible function to all enter to submit search
  const enterSearch = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      history.push('/search');
    }
  };

  return (
    <div className="search">
      <div className="search__input" >
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
          <div className="search__buttons">
            <Button className="search__buttonsHidden" onClick={search} variant="outlined">Google Search</Button>
            <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
          </div>)}
    </div>


  )
}

export default Search
