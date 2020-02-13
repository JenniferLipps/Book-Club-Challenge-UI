import React from 'react';
import userBooks from '../../Helpers/Data/UserBookData';

class NewReview extends React.Component {

    addReviewtoDB = () => {};

    componentDidMount() {
        const getBookId = this.props.match.params.id;
        userBooks.getBookById(getBookId)
            .then(book => console.error(book))
            .catch(err => console.error('Cannot get book info', err));
    };

    render() {
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
                        // value={}
                        // onChange={}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default NewReview;
