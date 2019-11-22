var mysql = require('mysql');
var express = require('express');
var application = express();
var db = require("./db");

function getAdmin(id){

  db.query("SELECT * FROM Administrator WHERE id = "+id, function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <SELECT> on Database! '+error);
    }else{
      console.log('All good');
      console.log(result);
      var ret = result;
    }
  });
  db.end();
  return ret//JSONAdmin
}

function updateAdmin(JSONAdmin){
  var ret = false;

  db.query("UPDATE `Administrator` SET `name`='"+JSONAdmin.name+"',`matrikelnummer`='"+JSONAdmin.matrikelnummer+"',`email`='"+JSONAdmin.email+"' WHERE id="+JSONAdmin.id, function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <UPDATE> on Database! '+error);
    }else{
      console.log('all good');
      console.log(result);
      ret = true;
    }
  });
  db.end();
  return ret //boolean
}

module.exports = {
  updateAdmin,
  getAdmin
}
