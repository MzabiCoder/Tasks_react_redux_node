const expess = require('express')
const router = expess.Router()
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth=require('../../middleware/authm')
 
// @route GET api/auth
// @desc auth the user
// @access public

router.post('/', (req, res) => {
    const {  email, password } = req.body
    if ( !email || !password) {
        res.status(400).json({message:'Please enter all fields'})
    }
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ message: 'user doesnt exists!!' })
            
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) res.status(400).json({ message: 'Invalid credential !!' })
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

router.get('/user', auth, (req, res) => {
    
    User.findById(req.user.id)
    .select('-password')
    .then(user=>res.json(user))
})

module.exports=router