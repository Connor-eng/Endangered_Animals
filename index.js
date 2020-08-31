const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'endangered_animals'
});

connection.connect(err => {
  if (err){
    return err;
  }
});

app.use(cors());

app.get('/', (req, res)=>{
  res.send("go to /animals to see all animals")
});

const SQL_COMMAND = `
-- Queries
-- 1 average population of each type of status
SELECT AVG(population_current), AVG(population_2010)
FROM status
WHERE classification = "Critically Endangered";


SELECT AVG(population_current), AVG(population_2010)
FROM status
WHERE classification = "Endangered";

SELECT AVG(population_current), AVG(population_2010)
FROM status
WHERE classification = "Vulnerable";



-- 2 change in population (links with animal name)
SELECT animals.common_name, status.population_current, status.population_2010
FROM status
JOIN animals
ON status.animals_id = animals.id;



-- 3 animal region and habitat linked
SELECT animals.common_name, region.common_name, region.continent, habitat.common_name
FROM animals
JOIN region
ON animals.animal_region = region.id
JOIN habitat
ON animals.animal_habitat = habitat.id;



-- 4 region name and continent(link with climate)
SELECT region.common_name, region.continent
FROM region
JOIN climate
ON climate.region_id = climate.id;



-- 5 habitat order table
SELECT *
FROM habitat
ORDER BY habitat.common_name ASC;



-- 6 status, region gdp, animal name
-- SELECT status.trend, status.classification
-- FROM 
-- (
--  SELECT animals.common_name, animals.scientific_name
--  FROM animals
--  UNION(
-- 	SELECT region.common_name, region.gdp_billions
--   FROM region
--    )
-- )status
-- ORDER BY status.classification;



-- 7 status order alphabetically and only show decreasing trend
SELECT *
FROM status
WHERE trend = "decreasing"
ORDER BY classification ASC;
`

app.get('/sqlCommand', (req, res) =>{
  connection.query(SQL_COMMAND, (err, results) => {
    if (err){
      return res.send(err)
    }
    else{
      return res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
  console.log("Animals server listening on port 4000")
});