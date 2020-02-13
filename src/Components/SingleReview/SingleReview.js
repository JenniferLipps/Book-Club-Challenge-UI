import React from 'react';
import reviewData from '../../Helpers/Data/BookReviewData';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';

const defaultReview = {
    review: '',
    rating: 5,
    bookId: '',
    userId: '',
    goodReadsBookId: ''
};

class SingleReview extends React.Component {
    state = {
        mySingleReview: {},
        otherUserReviews: [],
        newReview: defaultReview
    };

    getUserReview = () => {
        const getBookId = this.props.match.params.id;
        reviewData.getSingleReviewByUser(getBookId)
            .then(reviewInfo => this.setState({ mySingleReview: reviewInfo }))
            .catch(err => console.error('Unable to get review for this book', err));
    };

    getAllReviews = () => {
        const getGoodReadsId = this.props.match.params.goodReadsBookId;
        reviewData.getAllReviewsForBook(getGoodReadsId)
            .then(otherReviews => {console.error(otherReviews);
                this.setState({ otherUserReviews: otherReviews })})
            .catch(err => console.error('Unable to get reviews', err));
    };

    createNewReview = (e) => {
        const bookId = this.props.match.params.id;
        const userId = this.props.match.params.userId;
        const goodReadsBookId = this.props.params.goodReadsBookId;
        const saveNewReviewInfo = {...this.state.newReview}
        reviewData.postNewBookReview(saveNewReviewInfo)
            .then(() => this.props.history.push('/review'))
            .catch(err => console.error('Unable to save Review.', err));
    };

    componentDidMount() {
        this.getUserReview();
        this.getAllReviews();
    };

    render() {
        const { mySingleReview } = this.state;

        var renderReview;
        if (mySingleReview !== null || mySingleReview !== '') {
            renderReview = <div>
                    <h4>My Review for This Book</h4>
                    <div>{mySingleReview.title}</div>
                    <div>{mySingleReview.review}</div>
                    </div>;
        }
        if (mySingleReview === '' || mySingleReview === null) {
            renderReview = <div>                
                <h3>Write a New Review</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Review</label>
                        <input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Add some thoughts"
                        //value={}
                        // onChange={}
                        />
                    </div>
                </form>
                </div>
        };

        const displayOtherUserReviews = this.state.otherUserReviews.map((review) => 
            <SingleReviewCard
                otherReview={review}
            />);

        return (
            <div>
                <div>{ renderReview }</div>
                <div>
                    <h4>Other Users' Reviews</h4>
                    <div className="other-reviews d-flex flex-wrap">{ displayOtherUserReviews }</div>
                </div>
            </div>
        );
    }
}

export default SingleReview;