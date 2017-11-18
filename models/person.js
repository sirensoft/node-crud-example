var mysql = require('mysql')
var knex = require('knex')({
    client: 'mysql',
    connection: require('../config/db')
})

class Person {
    create(data) {
        return knex('person').insert(data);
    }
    update(id, data) {
        return knex('person').where({ id: id }).update(data)
    }
    delete(id) {
        return knex('person').where({ id: id }).del();
    }
    findOne(id) {
        return knex('person').where({ id: id })
    }
    findAll() {
        return knex.select().table('person')
    }
}

module.exports = Person;