var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '192.168.2.114',
  user: 'syp19',
  password: 'secretPassword',
  database: 'ES-BauteilverwaltungDB'
});

connection.connect(function(error){
  if(error){
    console.log('Error: '+error);
  }else{
    console.log('Connected!');
  }
});

module.exports = connection;
