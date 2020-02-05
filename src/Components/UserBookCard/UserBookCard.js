import React from 'react';

class UserBookCard extends React.Component {
    render () {
        const mySavedBook = {...this.props.mySavedBook}
        return (
            <div className="bookCard col-4" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{mySavedBook.title}</h4>
                        <h4 className="card-author">{mySavedBook.author}</h4>
                        <div className="card-img"><img src={mySavedBook.imageURL} alt="..." className="img-fluid"/></div>
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBookCard;
