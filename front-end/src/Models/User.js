/**Constructor Pattern - User
 * @constructor
 * @param {object} data  contains all user data
 */

class User {
    constructor(data) {
        
        this.userInfos = data.data.userInfos
        this.todayScore = data.data.todayScore
        this.score = data.data.score
        this.keyData = data.data.keyData
        
        // console.log(this.todayScore)
    }
}
export default User;



