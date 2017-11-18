var mysql = require('mysql')
var knex = require('knex')({
    client: 'mysql',
    connection: require('../config/db')
})

class User {
    async login(username, password) {
        let rows = await knex('user').count('username as result').where({
            'username': username,
            'password': password
        });
        return rows[0].result > 0;
    }
}

module.exports = User;