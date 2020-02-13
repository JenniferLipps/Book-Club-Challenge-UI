import React from 'react';

class BookReviewCard extends React.Component {   

    render() {
        const myReviews = {...this.props.myReviews};

        return (
            <div className="reviewCard col-4" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="review-title">{myReviews.title}</h4>
                        <div className="review-review">{myReviews.review}</div>                      
                    </div>
                </div>
            </div>
        );
    }
}

export default BookReviewCard;
