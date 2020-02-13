import React from 'react';
import reviewData from '../../Helpers/Data/BookReviewData';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';

class SingleReview extends React.Component {
    state = {
        mySingleReview: {},
        otherUserReviews: []
    };

    componentDidMount() {
        const getBookId = this.props.match.params.id;
        reviewData.getSingleReviewByUser(getBookId)
            .then(reviewInfo => this.setState({ mySingleReview: reviewInfo }))
            .catch(err => console.error('Unable to get review for this book', err));
        const getGoodReadsId = this.props.match.params.goodReadsBookId;
        reviewData.getAllReviewsForBook(getGoodReadsId)
            .then(otherReviews => {console.error(otherReviews);
                this.setState({ otherUserReviews: otherReviews })})
            .catch(err => console.error('Unable to get reviews', err));
    };

    render() {
        const { mySingleReview } = this.state;
        const displayOtherUserReviews = this.state.otherUserReviews.map((review) => 
            <SingleReviewCard
                otherReview={review}
            />);

        return (
            <div>
                <div>
                    <h4>My Review for This Book</h4>
                    <div>{mySingleReview.title}</div>
                    <div>{mySingleReview.review}</div>
                </div>
                <div>
                    <h4>Other Users' Reviews</h4>
                    <div className="other-reviews d-flex flex-wrap">{ displayOtherUserReviews }</div>
                </div>
            </div>
        );
    }
}

export default SingleReview;