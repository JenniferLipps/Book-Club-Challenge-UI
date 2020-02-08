import React from 'react';
import challenges from '../../Helpers/Data/ChallengeData';
import ChallengeCard from '../../Components/ChallengeCard/ChallengeCard';
import './Challenge.scss'

class Challenge extends React.Component {
    state = {
        userChallengeLibrary: [],
        allChallenges: []
    }

    getMyChallenges = () => {
        const userId = 1;
        challenges.getChallengesByUser(userId).then((userChallenges) => {
            console.error(userChallenges);
            this.setState({ userChallengeLibrary: userChallenges});
            }).catch(err => console.error("Cannot get challenges."))
    };

    getAllChallenges = () => {
        const challengeId = 5;
        challenges.getChallengesByChallengeId(challengeId).then((allChallenges) => {
            console.error(allChallenges);
        }).catch(err => console.error("Cannot retrieve challenges."))
    };

    componentDidMount () {
        this.getMyChallenges();
        this.getAllChallenges();
    }

    render() {
        const displayUsersChallenges = this.state.userChallengeLibrary.map((challenge) => {
            return <ChallengeCard 
                myChallenge={challenge}
                userId={1}
                />
        });

        return (
            <div className="challenges">
                <div><h4>Current Challenges</h4>
                { displayUsersChallenges }
                </div>
                <div>
                <form>
                    <p>Create a New Challenge</p>
                    {/* <div className="form-group">
                    <label htmlFor="title">New Challenge</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="New Challenge Title"
                    value={}
                    onChange={}
                    />
                    </div> */}
                    <button className="btn btn-warning">Create Challenge</button>
                </form>
            </div>
            </div>
            
        );
    }
};

export default Challenge;
