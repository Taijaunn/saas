import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../redux/Store";
import * as Chakra from "@chakra-ui/react";
import {SearchInstagramAction} from "../redux/SearchRedux/Helper";
import {IGMedia} from "../redux/SearchRedux/ActionTypes";

export const HomePage = () => {

    const dispatch = useDispatch()
    const searchState = useSelector((state: RootStore) => state.search)

    const [query, setQuery] = useState("")

    const onSearch = () => {
        dispatch(SearchInstagramAction(query))
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minHeight: "100vh",
        }}>
            {searchState.is_search_loading && <Chakra.CircularProgress m="20px" value={80}/>}
            <Chakra.Flex flexDir={"row"} alignItems={"center"} w="50%" m={"50px"}>
                <Chakra.Input
                    mr={"10px"}
                    type={'text'}
                    placeholder='Enter Instagram username'
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <Chakra.Button variant={"solid"} color={"blue"} isDisabled={query === ""} onClick={onSearch}>Search</Chakra.Button>
            </Chakra.Flex>
            {searchState.error_message !== "" && (
                <Chakra.Text color={"red"} margin={"10px"} fontSize={"20px"}>{searchState.error_message}</Chakra.Text>
            )}
            {searchState.ig_user && (
                <>
                    <Chakra.Link
                        href={`https://instagram.com/${searchState.ig_user.username}`}
                        isExternal
                        style={{textDecoration: "none"}}>
                        <Chakra.Card maxW='md' mt={"30px"}>
                            <Chakra.CardHeader>
                                <Chakra.Flex>
                                    <Chakra.Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Chakra.Avatar name='Segun Adebayo'
                                                       src={searchState.ig_user.profile_picture_url}/>
                                        <Chakra.Box>
                                            <Chakra.Heading size='sm'>{searchState.ig_user.name}</Chakra.Heading>
                                            <Chakra.Text>@{searchState.ig_user.username}</Chakra.Text>
                                        </Chakra.Box>
                                    </Chakra.Flex>
                                </Chakra.Flex>
                            </Chakra.CardHeader>
                            <Chakra.CardBody>
                                <Chakra.Text>{searchState.ig_user.biography}</Chakra.Text>
                                <Chakra.Text>{searchState.ig_user.website}</Chakra.Text>
                            </Chakra.CardBody>
                            <Chakra.CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                }}
                            >
                                <Chakra.Button flex='1' m={"5px"}>
                                    {searchState.ig_user.followers_count} Follower
                                </Chakra.Button>
                                <Chakra.Button flex='1' m={"5px"}>
                                    {searchState.ig_user.follows_count} Following
                                </Chakra.Button>
                                <Chakra.Button flex='1' m={"5px"}>
                                    {searchState.ig_user.media_count} Media
                                </Chakra.Button>
                            </Chakra.CardFooter>
                        </Chakra.Card>
                    </Chakra.Link>
                    <Chakra.Wrap>
                        {searchState.ig_user.media.data.filter((media: IGMedia) => {
                            if (media.media_type.includes("IMAGE") || media.media_type.includes("CAROUSEL_ALBUM")) {
                                return media
                            }
                        }).map((media: IGMedia) => {
                            return (
                                <Chakra.WrapItem key={media.id}>
                                    <Chakra.Link href={media.permalink} isExternal
                                                 style={{textDecoration: "none"}}>
                                        <Chakra.Card maxW='sm' m={"5px"}>
                                            <Chakra.CardBody>
                                                <Chakra.Image
                                                    src={media.media_url}
                                                    borderRadius='lg'
                                                />
                                                <Chakra.Stack mt='6' spacing='3'>
                                                    <Chakra.Text>{media.caption}</Chakra.Text>
                                                </Chakra.Stack>
                                            </Chakra.CardBody>
                                            <Chakra.Divider/>
                                            <Chakra.CardFooter
                                                justify='space-between'
                                                flexWrap='wrap'
                                                sx={{
                                                    '& > button': {
                                                        minW: '136px',
                                                    },
                                                }}
                                            >
                                                <Chakra.Button flex='1' m={"5px"}>
                                                    {media.like_count} Like
                                                </Chakra.Button>
                                                <Chakra.Button flex='1' m={"5px"}>
                                                    {media.comments_count} Comment
                                                </Chakra.Button>
                                            </Chakra.CardFooter>
                                        </Chakra.Card>
                                    </Chakra.Link>
                                </Chakra.WrapItem>
                            )
                        })}
                    </Chakra.Wrap>
                </>
            )}
        </div>
    )
}


