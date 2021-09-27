import * as actionTypes from "../actions/actionTypes"

const initialState = {
    kisi: {},
    kisiler: []
};
export default function kisiReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_KISI_SUCCESS:
            return {
                ...state,
                kisi: action.payload
            };
        case actionTypes.GET_KISILER_SUCCESS: {
            return {
                ...state,
                kisiler: action.payload
            };
        }
        case actionTypes.DELETE_KISI_SUCCESS:
            return {
                ...state,
                kisiler: state.kisiler.filter(kisi => action.payload !== kisi.id),
            };
        case actionTypes.ADD_KISI_SUCCESS: {
            return {
                ...state,
                kisiler: state.kisiler.concat(action.payload)
            }
        }
        case actionTypes.UPDATE_KISI_SUCCESS: {
            return {
                ...state,
                kisi: action.payload,
                kisiler: state.kisiler.map((kisi)=> kisi.id=== action.payload.id? action.payload: kisi)
            }
        }
        default:
            return state;
    }
}