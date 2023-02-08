/**Constructor Pattern - User
 * @constructor
 * @param {object} data  contains all user data
 */

class Perf  {
  constructor(data) {
    this.kind = data.data.kind
    this.data = data.data.data ;
  }
}
export default Perf;