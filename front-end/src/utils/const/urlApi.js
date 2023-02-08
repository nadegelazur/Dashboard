/**  A API data for the app with four endpoints
 * 
 * @param   {Number}  userId  The user id

 * @return  {url} Return url vers les datas
*/

export const urlApi = {
    userMainData(userId) {
        return `http://localhost:3000/user/${userId}`          
    },
    userActivity(userId) {
        return `http://localhost:3000/user/${userId}/activity`  
    },
    userAverageSessions(userId) {
        return `http://localhost:3000/user/${userId}/average-sessions`  
    },
    userPerformance(userId) {
        return `http://localhost:3000/user/${userId}/performance`  
    }
}
