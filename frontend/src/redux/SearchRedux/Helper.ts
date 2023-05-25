import {Dispatch} from "redux";
import {SearchDispatchTypes, SearchResponse} from "./ActionTypes";
import {
    SearchInstagramErrorAction,
    SearchInstagramRequestAction,
    SearchInstagramSuccessAction
} from "./Actions";
import {AxiosResponse} from "axios";
import {api_instance} from "../../utils/axiosConfig";
import {SEARCH_API, SUCCESS_CODE} from "../../utils/constants";

export const SearchInstagramAction = (query: string) => async (dispatch: Dispatch<SearchDispatchTypes>) => {

    dispatch(SearchInstagramRequestAction())

    try {
        const response: AxiosResponse<SearchResponse> = await api_instance.get(`${SEARCH_API}?q=${query}`)
        if (response.data.status === SUCCESS_CODE) {
            dispatch(SearchInstagramSuccessAction(response.data))
        }
        else {
            dispatch(SearchInstagramErrorAction(response.data))
        }
    } catch (error) { console.log(error) }
}
