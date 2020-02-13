import React from 'react';

class SingleReviewCard extends React.Component {   

    render() {
        const myReview = {...this.props.myReview};

        return (
            <div className="reviewCard col-4" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="review-title">{myReview.title}</h4>
                        <div className="review-review">{myReview.review}</div>                      
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleReviewCard;