// Check if current logged in user follows another user.
const isFollowingUser = (otherUserData, currentLoggedInUserData) => {
    return currentLoggedInUserData?.following?.some(id => id === otherUserData?.id) 
    && otherUserData?.followers?.some(id => id === currentLoggedInUserData?.id);
}

export { isFollowingUser };