const expess = require('express')
const router = expess.Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

 
// @route GET api/users
// @desc register new user
// @access public

router.post('/', (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400).json({message:'Please enter all fields'})
    }
    User.findOne({ email })
        .then(user => {
            if (user) res.status(400).json({ message: 'user already exists!!' })
            const NewUser = new User({
                name,
                email,
                password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(NewUser.password, salt, (err, hash) => {
                    if (err) return err
                    NewUser.password = hash
                    NewUser.save()
                        .then(user => {
                            jwt.sign(
                                {
                                id:user.id
                                },
                            config.get('sercret'),
                                { expiresIn: 36000 },
                                (err, token) => {
                                    if (err) throw err
                                    res.status(200).json({
                                       token,
                                        user: {
                                         id:user.id,
                                         name: user.name,
                                         email:user.email
                                    }
                                })
                            }
                            )
                           
                    })
            })
        })   

    })
})

module.exports=router