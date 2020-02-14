import React from 'react';
import BookCard from '../BookCard/BookCard';
import searchGoodReads from '../../Helpers/Data/ApiBookData';
import userBooks from '../../Helpers/Data/UserBookData';
import challenges from '../../Helpers/Data/ChallengeData';

import './Home.scss';

class Home extends React.Component {

    state = {
        query: '',
        apiSearchResults: [],
        userLibrary: [],
        userChallengeLibrary: []
    }

    handleTitleSearch = (e) => {
        e.preventDefault();
        searchGoodReads.getBookByTitle(this.state.query).then((books) => {
            this.setState({ apiSearchResults: books });
        }).catch((error) => {
            console.error("Error getting good reads books by title: ", error);
        });
    };

    getMyLibrary = () => {
        const userId = 1;
        userBooks.getUserBooks(userId).then((books) => {this.setState({ userLibrary: books })})
            .catch(err => console.error("Cannot get user books."))
    };

    getMyChallenges = () => {
        const userId = 1;
        challenges.getChallengesByUser(userId).then((userChallenges) => {
            console.error(userChallenges);
            this.setState({ userChallengeLibrary: userChallenges});
            }).catch(err => console.error("Cannot get challenges."))
    };

    componentDidMount () {
        this.getMyLibrary();
        this.getMyChallenges();
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
                <div className="App">
                    <header className="App-header">
                        <p>Book Club Challenge - Home</p>
                    </header>
                </div>
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
