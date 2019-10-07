const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");

module.exports = async function(req,res,next){

    const email = req.body.email;
    const password = req.body.password;
    // hämta alla users
    const users = require("../data/users");
    const filteredUsers = users.filter(user=>{
        return email === user.email;
    });
    // om vi har exakt en user med rätt email...
    if(filteredUsers.length === 1)
    {
        try {
            const result = await bcrypt.compare(password,filteredUsers[0].password)
            if(result){
                // user utan password och id
                const user = {email: filteredUsers[0].email , admin:filteredUsers[0].admin}

                const token = jwt.sign(user,process.env.secret,{expiresIn:120});
                
                req.user  = user;
                req.token = token;

                next();
            }
            else{
                res.redirect("/login?mes=wrong username or password");
            }
        } catch (error) {
            console.log(error);
        }

    }




}