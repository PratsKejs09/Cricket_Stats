import moment from 'moment';

export const getPlayerDOB = (dob) => {
  const timestamp = dob;
  const playerDOB = moment(timestamp).format("L");
  return playerDOB;
}
export const getAge = (dob) => {
    const playerObj = moment(getPlayerDOB(dob), "MM/DD/YYYY");
    const today = moment().format('MM/DD/YYYY');
    const todayObj = moment(today, "MM/DD/YYYY");
    const age = todayObj.diff(playerObj, "years");
    return age;
  };