const getView = require("../views/html");
const bcrypt = require("bcryptjs");
const login = require("../middleware/login");
const auth = require("../middleware/auth");

module.exports = function(app){


    app.get('/',(req,res)=>{ 
        res.send( getView("index", "<h1>My Node Auth Index Page</h1>") );
    });

    app.get('/secret',auth,(req,res)=>{ 
        res.send( getView("Secret ing", "<h1>I know where the hash is..</h1>") );
    });
     
     
    app.get('/login',(req,res)=>{ 

        const form = `
            <form action = "/login" method = "post">
                <input type = "email" name = "email" placeholder = "email" required>
                <br>
                <input type = "password" value="jens+peter=sant" name = "password" placeholder = "password" required>
                <br>
                <input type = "submit" value = "Login">
            </form>
        `;

        
         res.send( getView("Login View", form, req.query.mes) );
    });
     
    app.post('/login',login,async(req,res)=>{ 

        try{
        res.cookie("token",req.token,{httpOnly:true, sameSite:"lax"});
        // Vi skickar en cookie till som håller koll på CSRF 
        res.cookie("csrf","ChangeThisYouCF",{sameSite:"lax"});
        }
        catch(err){
            console.log(err);
        }
        

        res.send(getView("Logged In",`Loggin in as: ${JSON.stringify(req.user)} <br> ${req.token}`));
    });




}