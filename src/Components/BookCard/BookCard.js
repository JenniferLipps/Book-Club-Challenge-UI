import React from 'react';
import userBookInfo from '../../Helpers/Data/UserBookData';

class BookCard extends React.Component {

    addBooktoDB = () => {
        var selectedBook = {...this.props.apiBook};
        selectedBook.userId = this.props.userId;
        userBookInfo.postBookToDb(selectedBook);
    };


    render() {
        const apiBook = {...this.props.apiBook};
        return (
            <div className="bookCard col-4" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{apiBook.title}</h4>
                        <h4 className="card-author">{apiBook.author}</h4>
                        <div className="card-img"><img src={apiBook.imageURL} alt="..." className="img-fluid"/></div>
                        <button className="btn btn-danger" onClick={this.addBooktoDB}>Add to Book List</button>
                    </div>
                </div>
            </div>
        );
    }

};

export default BookCard;
