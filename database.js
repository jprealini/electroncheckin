var mysql = require('mysql');

var database = {
    getFirstTenRows: function getFirstTenRows(query, callback){
        var mysql = require('mysql');
    
        // Add the credentials to access your database
        var connection = mysql.createConnection({
            host     : '167.250.5.44',
            user     : 'grupogcp_electron',
            password : 'rdk0UoYirk',
            database : 'grupogcp_inandout'
            });
    
        // connect to mysql
        connection.connect(function(err) {
            // in case of error
            if(err){
                console.log(err.code);
                console.log(err.fatal);
            }
            console.log("Connection established");
        });
    
        connection.query(query, function(err, rows, fields) {
            if(err){
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }    
            callback(rows);    
            console.log("Query succesfully executed");
        });
    
        // Close the connection
        connection.end(function(){
            // The connection has been closed
        });
    }
};

module.exports = database;

