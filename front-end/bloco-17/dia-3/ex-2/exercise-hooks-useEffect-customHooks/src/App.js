import React, { useContext, useEffect } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import RedditContext from './context/RedditContext';

function App() {
  const {
    fetchPosts,
    selectedSubreddit,
    postsBySubreddit,
    isFetching,
  } = useContext(RedditContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const { lastUpdated, items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = (posts.length === 0);

  if (isFetching) {
    return (<h2>Loading...</h2>);
  }

  return (
    <div>
      <Selector />
      <div>
        { lastUpdated && (
          <span>
            { `Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.` }
          </span>
        ) }

        <button
          type="button"
          onClick={ fetchPosts }
        >
          Refresh
        </button>
      </div>
      { isEmpty ? <h2>Empty.</h2> : <Posts /> }
    </div>
  );
}

export default App;
