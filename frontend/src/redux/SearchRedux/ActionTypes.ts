export const SEARCH_INSTAGRAM_REQUEST = "SEARCH_INSTAGRAM_REQUEST"
export const SEARCH_INSTAGRAM_SUCCESS = "SEARCH_INSTAGRAM_SUCCESS"
export const SEARCH_INSTAGRAM_ERROR = "SEARCH_INSTAGRAM_ERROR"

export type IGUser = {
    name: string,
    username: string,
    website: string,
    biography: string,
    id: string,
    ig_id: number,
    profile_picture_url: string,
    followers_count: number,
    follows_count: number,
    media_count: number,
    media: {
        data: IGMedia[]
    },
}

export type IGMedia = {
    id: string,
    caption: string,
    comments_count: number,
    like_count: number,
    media_product_type: string,
    media_type: string,
    media_url: string,
    permalink: string,
    timestamp: string,
}

export type SearchResponse = {
    status: number,
    message: string,
    ig_user: IGUser,
}

export interface SearchInstagramRequest {
    type: typeof SEARCH_INSTAGRAM_REQUEST
}

export interface SearchInstagramSuccess {
    type: typeof SEARCH_INSTAGRAM_SUCCESS,
    search_response: SearchResponse
}

export interface SearchInstagramError {
    type: typeof SEARCH_INSTAGRAM_ERROR,
    search_response: SearchResponse
}

export type SearchDispatchTypes = SearchInstagramRequest | SearchInstagramSuccess | SearchInstagramError

