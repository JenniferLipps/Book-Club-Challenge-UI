import React from 'react';
import moment from 'moment';

class ChallengeCard extends React.Component {
    render () {
        const myChallenge = {...this.props.myChallenge}
        const startDate = moment(myChallenge.startDate).format('MMMM Do YYYY');
        const endDate = moment(myChallenge.endDate).format('MMMM Do YYYY');
        return (
            <div className="challengeCard" key={this.props.key}>
                <div className="card">
                    <div className="card-body">
                        <h4>Challenge # {myChallenge.challengeId}</h4>                                                
                        <h4 className="challenge-dates">Challenge starts {startDate} and ends {endDate}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;
