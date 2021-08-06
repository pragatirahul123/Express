const router = require("express").Router()
const knex = require('../database/config')


//get users
router.get('/', (req, res) => {
    knex.select('*').from('users')
.then((data) => {
    console.log(data);
    res.json({data:data})
})
.catch((err) => {
    console.log(err);
    res.json({ "message": err })
});
})

//insert data
router.post('/', (req, res) => {
    const userdata={
        Name: req.body.Name,
        email: req.body.email,
        // password: await bcrypt.hash(req.body.password,10)
    }
    knex('users').insert(userdata)

    .then((data) => {
        console.log(data);
        res.send("user successfully")
    })
        .catch((err) => {
            console.log(err);
            res.json({ "message": err })
        });

})

//update user
router.put('/:id', (req, res) => {
    knex('users').
        where('id', '=', req.params.id)
        .update({
            id:req.body.id, 
            Name: req.body.Name,
            email: req.body.email,
            // password: req.body.password
        })
        .then((data) => {
            console.log(data);
            res.send("updated successfully")
        })
        .catch((err) => {
            console.log(err);
            res.json({ "message": err})
        });
})

//delete user
router.delete('/:id', (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .del()
        .then((data) => {
            console.log(data);
            res.send("deleted successfully")
        })
        .catch((err) => {
            console.log(err);
            res.json({ "message": err })
        });
})


module.exports = router
