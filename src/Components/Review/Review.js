import React from 'react';
import reviewData from '../../Helpers/Data/BookReviewData';
import BookReviewCard from '../BookReviewCard/BookReviewCard';

class Review extends React.Component {
    state = {
        myReviewCollection: [],
    };

    getMyReviews = () => {
        const userId = 1;
        reviewData.getAllReviewsByUser(userId).then((reviews) => {
            console.error(reviews);
            this.setState({ myReviewCollection: reviews });
            }).catch(rr => console.error("Cannot get user reviews."));
    };

    componentDidMount() {
        this.getMyReviews();
    };

    render() {
        const displayAllUserReviews = this.state.myReviewCollection.map((review) => {
            return <BookReviewCard 
            myReviews={review}
            userId={1}/>
        })
        return (
            <div>                
                <div>
                    <h4>All My Book Reviews</h4>
                    <div className="d-flex flex-wrap">{ displayAllUserReviews }</div>
                </div>
            </div>
        );
    }
}

export default Review;
