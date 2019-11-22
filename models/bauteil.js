var mysql = require('mysql');
var express = require('express');
var application = express();
var db = require("./db");

function createBauteil(JSONBauteil){
  var ret = false;

  db.query("INSERT INTO Bauteil(`name`, `beschreibung`, `ortsangabe`, `anzahl`, `links`, `status`, `bibliothekselemente`, `zusaetzlicheDateien`) VALUES ('"+JSONBauteil.name+"', '"+JSONBauteil.beschreibung+"', '"+JSONBauteil.ortsangabe+"', "+JSONBauteil.anzahl+", '"+JSONBauteil.links+"', "+JSONBauteil.status+", '"+JSONBauteil.bibliothekselemente+"', "+JSONBauteil.zusaetzlicheDateien+")", function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <INSERT> on Database! '+error);
    }else{
      console.log('All good!');
      console.log(result);
      ret = true;
    }
  });
  db.end();
  return ret//boolean
}

function getBauteil(id){
  db.query("SELECT * FROM Bauteil WHERE id = "+id, function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <SELECT> on Database! '+error);
    }else{
      console.log('All good');
      console.log(result);
      var ret = result;
    }
  });
  db.end();
  return ret//JSON Bauteil
}

function updateBauteil(JSONBauteil){
  var ret = false;

  db.query("UPDATE `Bauteil` SET `name`='"+JSONBauteil.name+"',`beschreibung`='"+JSONBauteil.beschreibung+"',`ortsangabe`='"+JSONBauteil.ortsangabe+"',`anzahl`='"+JSONBauteil.anzahl+"',`links`='"+JSONBauteil.links+"',`status`='"+JSONBauteil.status+"',`bibliothekselemente`='"+JSONBauteil.bibliothekselemente+"',`zusaetzlicheDateien`='"+JSONBauteil.zusaetzlicheDateien+"' WHERE id="+JSONBauteil.id, function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <UPDATE> on Database! '+error);
    }else{
      console.log('All good');
      console.log(result);
      var ret = true;
    }
  });
  db.end();
  return ret//boolean
}

function deleteBauteil(id){
  var ret = false;

  db.query("DELETE FROM `Bauteil` WHERE id = "+id, function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <DELETE> on Database! '+error);
    }else{
      console.log('All good');
      console.log(result);
      var ret = true;
    }
  });
  db.end();
  return ret//boolean
}

function getAllBauteilActiv(){

  db.query("SELECT * FROM Bauteil WHERE status = 1", function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <SELECT> on Database! '+error);
    }else{
      console.log('All good');
      console.log(result);
      var ret = result;
    }
  });
  db.end();
  return ret//JSONBauteilList
}

function getAllBauteilPassive(){

  db.query("SELECT * FROM Bauteil WHERE status = 0", function(error, result, fields){
    if(error){
      console.log('An error occured while trying to execute <SELECT> on Database! '+error);
    }else{
      console.log('All good');
      console.log(result);
      var ret = result;
    }
  });
  db.end();
  return ret//JSONBauteilList
}

 function getAllBauteil(){
    var ret;
    db.query("SELECT * FROM Bauteil",  function(error, result, fields){

    if(error){
      console.log('An error occured while trying to execute <SELECT> on Database! '+error);
    }else{
      console.log('All good');
      ret = JSON.stringify({bauteilList: result});
    }
  });
  db.end();
  return ret//JSONBauteilList
}

module.exports = {
    getAllBauteil,
    getAllBauteilPassive,
    getAllBauteilActiv,
    deleteBauteil,
    updateBauteil,
    getBauteil,
    createBauteil
};
