import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";


const mapStateToProps = state => ({
    profile: state.profile.profile
})

const Logout = ({dispatch}) => {

    const logout = () => {
        dispatch(actions.logOut());  // profile = {}
    }

    useEffect(() => {
        logout()
    }, []);

    return(
    <div>
        <h1 className={"title has-text-danger-dark has-text-weight-bold mt-6"}>Użytkownik poprawnie wylogowany.</h1>
    </div>)
}

export default connect(mapStateToProps)(Logout);
