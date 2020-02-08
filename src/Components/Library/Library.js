import React from 'react';
import userBooks from '../../Helpers/Data/UserBookData';
import UserBookCard from '../../Components/UserBookCard/UserBookCard';

class Library extends React.Component {
    state = {
        userLibrary: []
    }
    getMyLibrary = () => {
        const userId = 1;
        userBooks.getUserBooks(userId).then((books) => {this.setState({ userLibrary: books })})
            .catch(err => console.error("Cannot get user books."))
    };

    componentDidMount () {
        this.getMyLibrary();
    }

    render() {
        const displayUsersBooks = this.state.userLibrary.map((book) => {
            return <UserBookCard
                mySavedBook={book}
                key={book.goodReadsId}
                userId={1}
                />
        });

        return (
            <div>
                    <h4>Your Completed Books</h4>
                    { displayUsersBooks }
                </div>
        );
    }
};

export default Library;
