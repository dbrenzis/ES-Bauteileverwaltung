const bauteilDb = require("../models/bauteil");

const getAllBauteil = /*async*/ () => {
  try {
    /*
    DAS HABEN WIR PROBIERT:
    var gg = await bauteilDb.getAllBauteil();
    console.log('Das hier:  '+gg);
    return gg;
    var gg = bauteilDb.getAllBauteil();
    console.log('Das hier:  '+gg);
    return gg;
    gg = JSON.parse(bauteilDb.getAllBauteil());
    //return JSON.parse(bauteilDb.getAllBauteil());
    */
    return bauteilDb.getAllBauteil();
  } catch (e) {
    throw new Error(e.message);
  }
};

const getBauteilById = _id => {
  try {
    return JSON.parse(bauteilDb.getBauteilById(_id));
  } catch (e) {
    throw new Error(e.message);
  }
};

const createBauteil = bauteil => {
  try {
    return bauteilDb.createBauteil(bauteil);
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateBauteil = bauteil => {
  try {
    return bauteilDb.updateBauteil(bauteil);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deleteBauteil = _id => {
  try {
    return bauteilDb.deleteBauteil(_id);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getAllBauteil,
  getBauteilById,
  createBauteil,
  updateBauteil,
  deleteBauteil
};
