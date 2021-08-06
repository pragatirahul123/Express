const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'localhost',
        user:'root' ,
        password:'Pragati@12' ,
        database:'javapoint'
    },

});
knex.schema.createTable("users", (table) => {
    table.increments('id').primary();
    table.string('Name')
    table.string('email')
    // table.string('password');
})
    .then((data) => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Table Already Exist!!");
    })

module.exports = knex;
