const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;
const mongo = require('../db/database.js');
const { Country } = require('../db/schema.js');

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) =>{

  try {
    
    const countries = await Country.find( {} )
    res.json(countries)
  }catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los países");
  }
  
});

// app.get("/continent/:code", (req, res) =>{
//   res.send("Hola mi server en Express");
// });

app.post("/", (req, res) =>{
  const body = req.body
  Country.create(body)
  res.json(body)
})

app.put("/code:", async(req, res) => {

  try {
    
  const code = req.params.code;
  const updateData = req.body;
  const update = await Country.updateOne({ "code": code }, { $set: updateData });
  } catch (error) {
    console.log(error);
  }
})

app.delete("/code:", (req, res) => {

})

mongo();


app.listen(port, () =>{
  console.log("My port: " + port);
});
