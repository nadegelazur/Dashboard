/**Constructor Pattern - User
 * @constructor
 * @param {object} data  contains all user data
 */


class Activity {
    constructor(data) {
        this.userId = data.data.userId
        this.sessions = data.data.sessions
    }
}

export default Activity;