const mongoose = require('mongoose');  

function ConnectDb() {
  try {
    mongoose.connect("mongodb+srv://diegoadmin:GIskE9aC2ap5Ss0n@mongodb101.o71ojzs.mongodb.net/")
    console.log("Mongo conneted");
  } catch (error) {
    console.log("Error: ", error);
  }
}

module.exports = ConnectDb;