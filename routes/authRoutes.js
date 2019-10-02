const getView = require("../views/html");

module.exports = function(app){


    app.get('/',(req,res)=>{ 
        res.send( getView("index", "<h1>My Node Auth Index Page</h1>") );
    });
     
    app.get('/register',(req,res)=>{      
         res.send( getView("Register", "Register Form content on the way...") ); 
    });
     
    app.get('/login',(req,res)=>{ 
         res.send( getView("Login View", "Login Form content on the way...") );
    });
     
    
    app.post('/register',(req,res)=>{ 
         res.send(" waiting for code");
    });
     
     
    app.post('/login',(req,res)=>{ 
         res.send(" waiting for code");
    });




}