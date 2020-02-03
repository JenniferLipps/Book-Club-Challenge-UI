import React from 'react';
import BookCard from '../BookCard/BookCard';
import searchGoodReads from '../../Helpers/Data/ApiBookData'

class Home extends React.Component {

    state = {
        query: '',
        apiSearchResults: [],
    }

    handleTitleSearch = (e) => {
        e.preventDefault();
        searchGoodReads.getBookByTitle(this.state.query).then((books) => {
            this.setState({ apiSearchResults: books });
        }).catch((error) => {
            console.error("Error getting good reads books by title: ", error);
        });
    };

    render() {
        const displaySearchResults = this.state.apiSearchResults.map((myBook) => {
            return <BookCard 
                apiBook={myBook}
                key={myBook.goodReadsId}
                userId={1}
                />
        });
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
                <div className="search-results d-flex flex-wrap">
                    { displaySearchResults }
                </div>
            </div>
        );
    };
}

export default Home;
