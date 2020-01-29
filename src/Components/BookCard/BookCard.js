import React from 'react';
import apiBookShape from '../../Helpers/theProps/BookShape';

const BookCard = (props) => {
    // static propTypes = {
    //     apiBook: apiBookShape.apiBookShape,
    // }
    const {
        title,
        author,
        imageUrl,
        goodReadsId
    } = props.book;

    // render() {
        // const apiBook = this.props;
        return (
            <div className="bookCard col-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h4 className="card-author">{author}</h4>
                        <div className="card-img"><img src={imageUrl} alt="..." className="img-fluid"/></div>
                        <button className="btn btn-danger">Add to Book List</button>
                    </div>
                </div>
            </div>
        );
    // }

};

export default BookCard;
