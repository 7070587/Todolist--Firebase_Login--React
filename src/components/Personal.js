import React, {Component, Fragment} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Button } from 'antd';


const config = {
	apiKey: 'AIzaSyD3Lncl-AUhN6ljEzDND7bRRAED_XT4J6g',
	authDomain: 'fir-react-ccecf.firebaseapp.com',
};
firebase.initializeApp(config);


export default class Personal extends Component {
	state = {isSignedIn: false};
	uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
	};

	componentDidMount() {

		firebase.auth().onAuthStateChanged(user => {
			this.setState({isSignedIn: !!user});
			console.log("user", user);
		});
	}


	render() {
		return (
			<div>
				{this.state.isSignedIn ?
					(
						<div>
							<h2>Welcome {firebase.auth().currentUser.displayName}</h2>

							<img className="ui medium rounded image"
							     src={firebase.auth().currentUser.photoURL} />
							<br/>
							<button className="ui button" type="submit"
							        onClick={() => firebase.auth().signOut()}>Log out!!
							</button>
						</div>

					)
					:
					(
						<StyledFirebaseAuth
							uiConfig={this.uiConfig}
							firebaseAuth={firebase.auth()}/>
					)
				}
			</div>

		)

	}
}

