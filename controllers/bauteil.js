const bauteileService = require("../services/bauteil");

const getBauteilAll = (req, res) => {
  try {
    res.render("bauteilList", bauteileService.getAllBauteil());
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const getBauteilById = (req, res) => {
  try {
    res.render("bauteil", bauteileService.getBauteilById(req.params.id));
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const postBauteil = (req, res) => {
  try {
    const createBauteilAnswer = bauteileService.createBauteil(req.body);
    if (createBauteilAnswer) {
      res.render("bauteilList");
    } else {
      res.render("failPage");
    }
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const putBauteilById = (req, res) => {
  try {
    const updateBauteilAnswer = bauteileService.updateBauteil(req.body);
    if (updateBauteilAnswer) {
      res.render("bauteilList");
    } else {
      res.render("failPage");
    }
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

const deleteBauteilById = (req, res) => {
  try {
    const deleteBauteilAnswer = bauteileService.deleteBauteil(req.body);
    if (deleteBauteilAnswer) {
      res.render("bauteilList");
    } else {
      res.render("failPage");
    }
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

module.exports = {
  getBauteilAll,
  getBauteilById,
  postBauteil,
  putBauteilById,
  deleteBauteilById
};
