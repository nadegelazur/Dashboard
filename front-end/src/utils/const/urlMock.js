/**  A mocked data for the app with four endpoints
 * 
 * @param   {Number}  userId  The user id

 * @return  {url} Return url vers les datas
*/
export const urlMock = {
    userMainData(userId) {
        return `../data/${userId}/mainData.json`  
    },
    userActivity(userId) {
        return `../data/${userId}/activity.json`  
    },
    userAverageSessions(userId) {
        return `../data/${userId}/average-sessions.json`  
    },
    userPerformance(userId) {
        return `../data/${userId}/performance.json`  
    }
}