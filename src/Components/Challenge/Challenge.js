import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import challenges from '../../Helpers/Data/ChallengeData';
import ChallengeCard from '../../Components/ChallengeCard/ChallengeCard';
import './Challenge.scss'

class Challenge extends React.Component {
    state = {
        userChallengeLibrary: [],
        allChallenges: [],
        newChallenge: []
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

    createNewChallenge = (e) => {
        e.preventDefault();
        const saveNewChallenge = {...this.state.newChallenge}
        const userId = 1;
        saveNewChallenge.creatorId = userId;
        challenges.addNewChallenge(saveNewChallenge)
            .then(() => this.props.history.push('/challenge'))
            .catch(err => console.error('Unable to save Challenge.', err));
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

        // const displayAllChallenges = this.state.allChallenges.map((challenge) => {
        //     return <ChallengeCard

        //     />
        // });

        return (
            <div className="challenges">
                <div><h4>My Current Challenges</h4>
                { displayUsersChallenges }
                </div>

                <div>
                <Form>
                    <p>Create a New Challenge</p>                    
                    <Label For="title">New Challenge</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>               
                    <button className="btn btn-warning">Create Challenge</button>
                </Form>
                </div>
            </div>
            
        );
    }
};

export default Challenge;
