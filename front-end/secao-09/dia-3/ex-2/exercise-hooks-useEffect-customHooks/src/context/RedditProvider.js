import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
    frontend: { items: [] },
    reactjs: { items: [] },
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [isFetching, setIsFetching] = useState(false);

  const hasSubredditLoaded = () => {
    const subredditPosts = postsBySubreddit[selectedSubreddit];
    return subredditPosts.items.length > 0;
  };

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);
    const newPost = {
      ...postsBySubreddit,
      [selectedSubreddit]: { items, lastUpdated },
    };
    setPostsBySubreddit(newPost);
    setIsFetching(false);
  };

  const handleFetchError = (error) => {
    const newPost = {
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    };
    setPostsBySubreddit(newPost);
    setIsFetching(false);
  };

  const fetchPosts = () => {
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess)
      .catch(handleFetchError);
  };

  useEffect(() => {
    if (!hasSubredditLoaded()) {
      fetchPosts();
    }
  }, [selectedSubreddit]);

  const context = {
    postsBySubreddit,
    selectedSubreddit,
    isFetching,
    selectSubreddit: setSelectedSubreddit,
    fetchPosts,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };
  return (
    <RedditContext.Provider value={ context }>{children}</RedditContext.Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RedditProvider;
