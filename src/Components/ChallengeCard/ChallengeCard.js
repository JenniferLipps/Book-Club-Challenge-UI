import React from 'react';
import moment from 'moment';

class ChallengeCard extends React.Component {
    render () {
        const myChallenge = {...this.props.myChallenge}
        const startDate = moment(myChallenge.startDate).format('MMMM Do YYYY');
        const endDate = moment(myChallenge.endDate).format('MMMM Do YYYY');
        return (
            <div className="challengeCard col-4" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4>Challenge # {myChallenge.id}</h4>
                        <h4 className="challenge-start">{startDate}</h4>
                        <h4 className="challenge-end">{endDate}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;
