import React from 'react';
import challenges from '../../Helpers/Data/ChallengeData';
import ChallengeCard from '../../Components/ChallengeCard/ChallengeCard';

class Challenge extends React.Component {
    state = {
        userChallengeLibrary: []
    }

    getMyChallenges = () => {
        const userId = 1;
        challenges.getChallenges(userId).then((userChallenges) => {
            console.error(userChallenges);
            this.setState({ userChallengeLibrary: userChallenges});
            }).catch(err => console.error("Cannot get challenges."))
    };

    componentDidMount () {
        this.getMyChallenges();
    }
    
    render() {
        const displayUsersChallenges = this.state.userChallengeLibrary.map((challenge) => {
            return <ChallengeCard 
                myChallenge={challenge}
                userId={1}
                />
        });

        return (
            <div>
                <h4>Current Challenges</h4>
                { displayUsersChallenges }
            </div>
        );
    }
};

export default Challenge;
