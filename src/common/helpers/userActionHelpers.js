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
    return currentLoggedInUserData?.following?.length ? allUsers.filter(user => !currentLoggedInUserData?.following?.includes(user?.id) && user?.id !== currentLoggedInUserData?.id)
    : allUsers.filter(user => user?.id !== currentLoggedInUserData?.id);
}

const getPostDisplayName = (firstName, lastName) => {
    return firstName + " " + lastName.charAt(0);
}

export { isFollowingUser, getFollowingUsers, getFollowedUsers, getExplorePeers, getPostDisplayName };