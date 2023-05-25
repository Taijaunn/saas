import {
    SearchDispatchTypes,
    SEARCH_INSTAGRAM_ERROR,
    SEARCH_INSTAGRAM_REQUEST,
    SEARCH_INSTAGRAM_SUCCESS, IGUser
} from "./ActionTypes";

export interface SearchState {
    is_search_loading: boolean,
    status: number,
    success_message: string,
    error_message: string,
    ig_user: IGUser | null,
}

const defaultState: SearchState = {
    is_search_loading: false,
    status: 0,
    success_message: "",
    error_message: "",
    ig_user: null,
}

export const SearchReducer = (
    state: SearchState = defaultState, action: SearchDispatchTypes
): SearchState => {
    switch (action.type) {
        case SEARCH_INSTAGRAM_REQUEST:
            return {
                ...state,
                is_search_loading: true
            }
        case SEARCH_INSTAGRAM_SUCCESS:
            return {
                ...state,
                is_search_loading: false,
                status: action.search_response.status,
                success_message: action.search_response.message,
                error_message: "",
                ig_user: action.search_response.ig_user
            }
        case SEARCH_INSTAGRAM_ERROR:
            return {
                ...state,
                is_search_loading: false,
                status: action.search_response.status,
                success_message: "",
                error_message: action.search_response.message,
                ig_user: null
            }
        default:
            return state
    }
}
