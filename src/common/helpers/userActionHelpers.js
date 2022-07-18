// Check if current logged in user follows another user.
const isFollowingUser = (otherUserData, currentLoggedInUserData) => {
    return currentLoggedInUserData?.following?.some(id => id === otherUserData?.id) 
    && otherUserData?.followers?.some(id => id === currentLoggedInUserData?.id);
}

const getFollowingUsers = (allUsers, currentLoggedInUserData) => {
    return currentLoggedInUserData?.following?.map(id => allUsers?.find(user => user?.id === id));
}

const getFollowedUsers = (allUsers, currentLoggedInUserData) => {
    return currentLoggedInUserData?.followers?.map(id => allUsers?.find(user => user?.id === id));
}

const getExplorePeers = (allUsers, currentLoggedInUserData) => {
    return currentLoggedInUserData?.following?.length ? currentLoggedInUserData?.following?.map(id => allUsers?.find(user => user?.id !== id))
    : allUsers.filter(user => user?.id !== currentLoggedInUserData?.id);
}

export { isFollowingUser, getFollowingUsers, getFollowedUsers, getExplorePeers };