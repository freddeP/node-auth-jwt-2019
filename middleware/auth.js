const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){

    jwt.verify(req.cookies.token,process.env.secret,function(err,token){
        console.log(err);
        if(err) { res.redirect("/login?mustBeLoggedIn")}
        else
        {
            if(process.env.csrf === req.cookies.csrf)
            {
                res.send(token);
            }
            else console.log(process.env.csrf, req.cookies.csrf)

        }


    });

}

