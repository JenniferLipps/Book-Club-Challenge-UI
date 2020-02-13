import React from 'react';
//import userBooks from '../../Helpers/Data/UserBookData';

class NewReview extends React.Component {

    addReviewtoDB = () => {};

    componentDidMount() {
        
    };

    render() {
        const reviewToSave = {...this.props.myNewReview}
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
