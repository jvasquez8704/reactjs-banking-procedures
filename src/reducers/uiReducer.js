import { types } from '../constants/types';

const initialState = {
    tab: 1,
    step: 0,
    loading: false,
    err: null,
    openModal: false,
    openAdvertisement: false
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.updateStep:
            return {
                ...state,
                step: action.payload
            }
        case types.setError:
            return {
                ...state,
                err: action.payload
            }
        case types.unsetError:
            return {
                ...state,
                err: null
            }
        case types.setLoading:
            return {
                ...state,
                loading: !state.loading
            }
        case types.setTab:
            return {
                ...state,
                tab: action.payload
            }
        case types.setModal:
            return {
                ...state,
                openModal: action.payload
            }
        case types.setAdvertisement:
            return {
                ...state,
                openAdvertisement: action.payload
            } 
        default:
            return state;
    }
}