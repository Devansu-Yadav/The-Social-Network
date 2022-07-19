import moment from "moment";
import "moment-precise-range-plugin";

const getDateStringFromSeconds = (date) => {
    return date.toDate().toString();
};

const getPostTime = (postCreatedAt) => {
    const now = moment();
    const postCreated = moment(postCreatedAt);
    const diffTime = moment.preciseDiff(postCreated, now, true);

    if(diffTime.years) {
        return diffTime.years === 1 ? `${diffTime.years}yr`: `${diffTime.years}yrs`;
    } else if(diffTime.months) {
        return `${diffTime.months}m`;
    } else if(diffTime.days) {
        return `${diffTime.days}d`;
    } else if(diffTime.hours) {
        return diffTime.hours === 1 ? `${diffTime.hours}hr`: `${diffTime.hours}hrs`;
    } else if(diffTime.minutes) {
        return diffTime.minutes === 1 ? `${diffTime.minutes}min`: `${diffTime.minutes}mins`;
    }
    return `${diffTime.seconds}s`;
};

export { getDateStringFromSeconds, getPostTime };