
const connectionhelper = require('./connectToData')


function addUser(req) {
    return new Promise(async (resolve, reject) => {
        let pool = await connectionhelper.connectionfun()

        y.query('INSERT INTO users (flName,userName,password,phoneNumber) VALUES(?,?,?,?)', [req.flName, req.userName, req.password, req.phoneNumber], (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your signup is sccsfully')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.addUser = addUser

// =============================================================
function getUserByUsername(userName) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query(`SELECT  * FROM  users WHERE userName='${userName}'`, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your signup is sccsfully')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.getUserByUsername = getUserByUsername
//==================================================================
//==delet userTeacher by email===============
function deleteUserByUsername(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('SELECT  * FROM   users WHERE userName=${userName}', (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your acount deleted')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.deleteUserByUsername = deleteUserByUsername
//========================================================

function updateUserByUsername(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('SELECT  * FROM  users WHERE userName=${userName}', (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve('your acount deleted')
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.updateUserByUsername = updateUserByUsername











