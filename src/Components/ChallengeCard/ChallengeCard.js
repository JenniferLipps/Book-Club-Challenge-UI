import React from 'react';
import moment from 'moment';

class ChallengeCard extends React.Component {
    render () {
        const myChallenge = {...this.props.myChallenge}
        const startDate = moment(myChallenge.startDate).format('MMMM Do YYYY');
        const endDate = moment(myChallenge.endDate).format('MMMM Do YYYY');
        
        const challengeStats = myChallenge.usersInChallenge.map(user => {
            return (
                <div>
                    <div>{user.firstName} {user.lastName}</div>
                    <div>Books read: {user.booksCompleted}</div>
                </div>)
            });

        return (
            <div className="card challengeCard col-6" key={this.props.key}>                
                <div className="card-body">
                    <h4>Challenge # {myChallenge.challengeId}</h4>                                                
                    <h6 className="challenge-dates">Challenge starts {startDate} and ends {endDate}</h6>
                    <div>{ challengeStats } </div>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;
