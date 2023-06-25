import moment from 'moment';

export const getAge = (dob) => {
    const timestamp = dob;
    const playerDOB = moment(timestamp).format("L");
    const today = moment().format("MM/DD/YYYY");
    const playerObj = moment(playerDOB, "MM/DD/YYYY");
    const todayObj = moment(today, "MM/DD/YYYY");
    const age = todayObj.diff(playerObj, "years");
    return age;
  };