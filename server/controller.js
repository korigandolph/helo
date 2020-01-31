const bcrypt = require('bcryptjs');

module.exports ={
    register: async (req, res) =>{
        const {username, password} = req.body
        const db = req.app.get('db')

        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('User already registered')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.register_user({username, hash})
        newUser = newUser[0];
        req.session.user = newUser;
        res.status(201).send(req.session.user)
    },
    login: async (req, res)=>{
        const {username, password} = req.body
        const db = req.app.get('db')

        let user = await db.check_user(username)
        user = user[0];
        if(!user){
            return res.status(400).send('Invalid username')
        }

        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password;
            req.session.user = user
            res.status(202).send(req.session.user)
        } else{
            res.status (401).send ('Invalid Password')
        }
    }
}