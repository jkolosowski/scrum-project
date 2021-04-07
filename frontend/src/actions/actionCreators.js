import * as actions from "./actionTypes";
import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/users/")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.GET_USERS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const logIn = (user) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/login", {pesel: user.pesel})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.LOG_IN,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const logOut = () => {
    return {
        type: actions.LOG_OUT,
        payload: {}
    }
}

export const sendPolls = (poll) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/poll", {poll})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.SEND_POLLS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const register = (info) => {
    return () => {
        return axios.post("http://localhost:3000/users/registration", {info})
            .then(response => {
                return response
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const findUser = (user) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/find", {pesel: user.pesel})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.FIND_USER,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const updateUser = (update) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/poll/update", {update})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.SEND_POLLS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}

export const deleteUser = (pesel) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/users/delete", {pesel})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: actions.DELETE_USER
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}