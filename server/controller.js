const bcrypt = require('bcryptjs');

module.exports ={
    register: async (req, res) =>{
        const {username, password} = req.body
        const db = req.app.get('db')

        let user = await db.check_user(username);
        if(user[0]){
            return res.status(400).send('User already registered')
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(username, hash)
        req.session.user = newUser[0];
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
    },
    getPosts: (req, res) => {
        const db = req.app.get('db')
        db.get_posts().then(results => {
          res.status(200).send(results)
        }).catch(err => res.status(500).send(err))
      },
      addPost: (req, res) => {
        const db = req.app.get('db')
        const {title, img, content} = req.body
        console.log(req.body)
        db.add_post([title, img, content]).then(results => {
          res.sendStatus(200)
        }).catch(err => res.status(500).send(err))
      },
}