import * as actions from "./actionTypes";
import axios from "axios";



export const logIn = (user) => {
    return {
        type: actions.LOG_IN,
        payload: user
    }
}

export const logOut = () => {
    return {
        type: actions.LOG_OUT,
        payload: {}
    }
}

export const sendPolls = (poll) => {
    return {
        type: actions.SEND_POLLS,
        payload: poll
    }
}