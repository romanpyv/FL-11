import actionTypes from "./actionTypes";

export default {
    loadUsers: () => ({
        type: actionTypes.LOAD_USERS
    }),
    deleteUser: id => ({
        type: actionTypes.DELETE_USER,
        payload: id
    }),
    changeFilter: filter => ({
        type: actionTypes.CHANGE_FILTER,
        payload: filter
    })
};
