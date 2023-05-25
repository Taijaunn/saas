import {
    SearchDispatchTypes,
    SearchResponse,
    SEARCH_INSTAGRAM_ERROR,
    SEARCH_INSTAGRAM_REQUEST,
    SEARCH_INSTAGRAM_SUCCESS
} from "./ActionTypes";

export const SearchInstagramRequestAction = (): SearchDispatchTypes => {
    return {
        type: SEARCH_INSTAGRAM_REQUEST
    }
}

export const SearchInstagramSuccessAction = (search_response: SearchResponse): SearchDispatchTypes => {
    return {
        type: SEARCH_INSTAGRAM_SUCCESS,
        search_response: search_response
    }
}

export const SearchInstagramErrorAction = (search_response: SearchResponse): SearchDispatchTypes => {
    return {
        type: SEARCH_INSTAGRAM_ERROR,
        search_response: search_response
    }
}
