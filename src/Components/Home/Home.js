import React from 'react';
import searchGoodReads from '../../Helpers/Data/ApiBookData'

class Home extends React.Component {

    state = {
        query: ''
    }

    handleTitleSearch = (e) => {
        e.preventDefault();
        const titleResults = searchGoodReads.getBookByTitle(this.state.query);
        console.error(titleResults);
    };

    render() {
        return (
            <div className="Home">
                <div className="Search-Input">
                    <form>
                    <p>Search by Title</p>
                    <input
                        type='search'
                        placeholder='Search Titles'
                        value={this.state.query}
                        onChange={(e) => this.setState({query: e.currentTarget.value})}
                    />
                    <button onClick={this.handleTitleSearch}>Search</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default Home;
