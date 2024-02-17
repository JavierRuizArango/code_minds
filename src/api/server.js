const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;
const mongo = require('../db/database.js');
const { Country } = require('../db/schema.js');

app.use(express.json());
app.use(cors());

app.get("/countries", async (req, res) =>{
  try {
    
    const countries = await Country.find( {} )
    res.json(countries)
  }catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los países");
  }
  
});

app.get("/country/:code", async (req, res) => {
  
    const { code } = req.params;
    const country = await Country.findOne( { code: code } )
    
    .then((country) => {
      if (country) {
        res.status(200).json(country)
      }else {
        res.status(404).send("Not found")
      }
    })
                                

})

app.get("/continent/:code", async (req, res) =>{
   
  const continentCode = req.params.code;

  try {
    // Realizar la búsqueda de los países por el código de continente
    const countries = await Country.find({ continentCode });
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los países por continente");
  }
});

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

app.delete("/country/:code", async (req, res) => {
  const { code } = req.params
  const country = await Country.findOneAndDelete( {code : code})

  .then((country) => {
    if (country) {
      res.status(200).json({
        message: "Country deleted",
        country: country
      })
    }else {
      res.status(404).send("Not found")
    }
  })
  

})

mongo();


app.listen(port, () =>{
  console.log("My port: " + port);
});
