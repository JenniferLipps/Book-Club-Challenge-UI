import React from 'react';
import userBooks from '../../Helpers/Data/UserBookData';

class NewReview extends React.Component {
    state = {
        reviewToAdd: []
    }

    getBookToReview = () => {
        const getGoodReadsId = this.props.match.params.goodReadsBookId;
        userBooks.getBookById(getGoodReadsId).then(review => console.error(review))
            .catch(err => console.error('Cannot get book by Id', err));
    };

    createNewReview = () => {};

    addReviewtoDB = () => {};

    componentDidMount() {
        
    };

    render() {
        //const reviewToSave = {...this.props.myNewReview}
        return (
            <div>
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
        );
    }
};

export default NewReview;
