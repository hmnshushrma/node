create table users(
   id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
   user_name VARCHAR(40) NOT NULL,
   first_name VARCHAR(40) NOT NULL,
   last_name VARCHAR(40) NOT NULL,
   password VARCHAR(255) NOT NULL,
   email_id VARCHAR(20) NOT NULL,
   created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


app.post('/data', function(req, res){

    var username=req.body.name;

    connection.query("INSERT INTO `names` (name) SET ?", username.toString(), function(err, result){
        if(err) throw err;

        console.log("1 record inserted");
    });

    res.send(username);

});
