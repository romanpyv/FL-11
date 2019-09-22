import actionTypes from "./actionTypes";
import data from "./data";

const initialState = {
    data,
    showed: 5,
    search: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            return {
                ...state,
                showed: Math.min(state.showed + 5, state.data.length)
            };

        case actionTypes.DELETE_USER:
            return {
                ...state,
                data: state.data.filter((i) => i.id != action.payload),
                showed: state.showed - 1
            };

        case actionTypes.CHANGE_FILTER:
            return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }
}

