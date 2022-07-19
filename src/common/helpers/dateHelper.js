const getDateStringFromSeconds = (secs) => {
    const date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    return date.toString();
}

export { getDateStringFromSeconds };