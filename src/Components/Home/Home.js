import React from 'react';
import Fuse from 'fuse.js';

class Home extends React.Component {

    searchOptions = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "title",
          "author",
          "isbn"
        ]
      };

    render() {
        return (
            <div className="Home">
                <div className="Search-Input">
                    <input
                        type='search'                        
                    />
                </div>    
            </div>
        );
    };
}

export default Home;
