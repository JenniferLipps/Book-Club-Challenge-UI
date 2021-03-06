import React from 'react';
import reviewData from '../../Helpers/Data/BookReviewData';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';
import './SingleReview.scss';

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
        newReview: defaultReview,
        reviewToAdd: ''
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

    handleInputChange = (e) => {
        this.setState({ reviewToAdd: e.target.value })
    };

    createNewReview = (e) => {
        const saveNewReviewInfo = {...this.state.newReview}
        saveNewReviewInfo.review = this.state.reviewToAdd
        saveNewReviewInfo.bookId = this.props.match.params.id
        saveNewReviewInfo.userId = this.props.match.params.userId
        saveNewReviewInfo.goodReadsBookId= this.props.match.params.goodReadsBookId
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
                    <h4>My Review of {mySingleReview.title}</h4>
                    {/* <div>{mySingleReview.title}</div> */}
                    <div>{mySingleReview.review}</div>
                    </div>;
        }
        if (mySingleReview === '' || mySingleReview === null) {
            renderReview = <div>                
                <h3>Write a New Review</h3>
                {/* <form>               
                    <div className="form-group"> */}
                        <label htmlFor="title">Review</label>
                        <input
                        type="text"
                        // className="form-control"
                        // id="review"
                        placeholder="Add some thoughts"
                        value={this.state.reviewToAdd}
                        onChange={this.handleInputChange}
                        />
                        <button onClick={this.createNewReview}>Add Review</button>                    
                    {/* </div>
                </form> */}
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
                    <h4>What other readers are saying:</h4>
                    <div className="other-reviews d-flex flex-wrap">{ displayOtherUserReviews }</div>
                </div>
            </div>
        );
    }
}

export default SingleReview;