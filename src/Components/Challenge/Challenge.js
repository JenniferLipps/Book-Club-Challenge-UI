import React from 'react';
import { Form, Label, Input } from 'reactstrap';
import challenges from '../../Helpers/Data/ChallengeData';
import ChallengeCard from '../../Components/ChallengeCard/ChallengeCard';
import userData from '../../Helpers/Data/UserInfo';
import './Challenge.scss'

const defaultChallenge = {
    userIds: []
}

class Challenge extends React.Component {
    state = {
        userChallengeLibrary: [],
        allChallenges: [],
        newChallenge: defaultChallenge,
        allUsers: []
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

    getAllUsers = () => {
        userData.getAllUsers()
          .then(allUsers => this.setState({ allUsers }))
          .catch(err => console.error('Could not get user list', err));
      }

    selectUsers = (e) => {
        e.preventDefault();
        const tempUsers = { ...this.state.newChallenge }
        tempUsers.userIds.push(e.target.id);
        this.setState({newChallenge: tempUsers});
    };

    componentDidMount () {
        this.getMyChallenges();
        this.getAllChallenges();
        this.getAllUsers();
    }

    render() {
        const displayUsersChallenges = this.state.userChallengeLibrary.map((challenge) => {
            return <ChallengeCard 
                myChallenge={challenge}
                userId={1}
                />
        });

        const createUserMenuOptions = this.state.allUsers.map(challengeUser => (
            <option id={challengeUser.id} onClick={this.selectUsers}>{challengeUser.firstName} {challengeUser.lastName}</option>
        ))

        return (
            <div className="challenges">
                <div><h4>My Current Challenges</h4>
                { displayUsersChallenges }
                </div>

                <div>
                <Form>
                    <h4>Create a New Challenge</h4>                    
                    <Label For="title">New Challenge</Label>
                    <Input type="select" name="selectMulti" multiple>
                        { createUserMenuOptions }
                    </Input>               
                    <button className="btn btn-warning" onClick={this.createNewChallenge}>Create Challenge</button>
                </Form>
                </div>
            </div>
            
        );
    }
};

export default Challenge;
