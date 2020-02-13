import React from 'react';

class SingleReviewCard extends React.Component {   

    render() {
        const otherReview = {...this.props.otherReview};

        return (
            <div className="reviewCard" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="review-name">{otherReview.firstName} {otherReview.lastName}</h4>
                        <div className="review-review">{otherReview.review}</div>                      
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleReviewCard;