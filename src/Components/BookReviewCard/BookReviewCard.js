import React from 'react';
import './BookReviewCard.scss';

class BookReviewCard extends React.Component {   

    render() {
        const myReviews = {...this.props.myReviews};

        return (
            <div className="card reviewCard col-12" key={this.props.key}>                
                    <div className="card-body">
                        <h4 className="review-title">{myReviews.title}</h4>
                        <div className="review-review">{myReviews.review}</div>                      
                    </div>
            </div>
        );
    }
}

export default BookReviewCard;
