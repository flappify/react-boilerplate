import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../../redux/auth/auth.actions';
const SignOut=(props)=>{
        return(
            <a href="/login" onClick={props.signOut}  className="signout"><i className="fas fa-power-off"></i> <div>Log Out</div></a>
        )
    }

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignOut);