import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../../redux/auth/auth.actions';
import {Redirect} from 'react-router-dom';

import FormInput from '../../components/form-input/form-input.component';
import login from '../../../assets/login.jpg';

import {signInWithGoogle} from '../../../firebase/firebase.utils';

import './sign-in.styles.css';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            name:'',
            password:''
        };
      }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render()
    {
      const {authError,auth}=this.props
      if(auth.uid) return <Redirect to='/' />
        return(
            <div className="login-form-container">
                <div className="left">
                    <img src={login} alt="login"/>
                    <h1>Login For More Functionality . . . .</h1>
                </div>
                <div className="login-content">
                    <h1>LOGIN</h1>
                  <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="form-group">
                            <FormInput
                                name='name'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.name}
                                label='Enter your id'
                                required
                            />
                            <FormInput
                                name='password'
                                type='password'
                                handleChange={this.handleChange}
                                value={this.state.password}
                                label='Enter your password'
                                required
                            />
                        </div>
                      <div className="submit-button">
                          <button type="submit">LOGIN</button>
                      </div>
                  </form>
                  <div>
                      <button className="google-login" onClick={signInWithGoogle}>Google SignIn <i className="fab fa-google"></i></button>
                  </div>
                  <div className="login-alert">{authError ? <p>{authError}</p>:null}</div>
                </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
      auth:state.firebase.auth
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
      signIn:(creds)=>dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps,mapDispathToProps)(SignIn);