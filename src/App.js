import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import {auth,createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import NavBar from './layout/components/navbar/navbar.component';
import HomePage from './layout/pages/homepage/homepage.component';
import Footer from './layout/components/footer/footer.component';
import SignIn from './layout/pages/sign-in/sign-in.component';
import NotFound from './layout/pages/NOT-FOUND/notfound.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} =this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div className="App">
          <BrowserRouter>
            <NavBar />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={SignIn} />
                <Route path='*' exact component={NotFound} />
              </Switch>
            <Footer />
          </BrowserRouter>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);

