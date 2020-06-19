DROP DATABASE endangered_animals;
CREATE DATABASE endangered_animals;
USE endangered_animals;

CREATE TABLE animals(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   common_name VARCHAR(50),
   scientific_name VARCHAR(50),
   diet VARCHAR(50),
   average_weight INT,
   color VARCHAR(50),
   behavior VARCHAR(50),
   life_expectancy INT,
   animals_habitat VARCHAR(50),
   animals_region VARCHAR(50),
   FOREIGN KEY(animal_habitat) REFERENCES habitat(id)  ON DELETE CASCADE,
   FOREIGN KEY(animal_region) REFERENCES region(id)  ON DELETE CASCADE
);


CREATE TABLE status(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  classification VARCHAR(50),
  population_current INT,
  population_2010 INT,
  percent_captivity INT,
  trend VARCHAR(50),
  animals_id INT,
  FOREIGN KEY(animals_id) REFERENCES animals(id)  ON DELETE CASCADE
);

CREATE TABLE region(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  common_name VARCHAR(50),
  gdp_billions INT,
  continent VARCHAR(50),
  industrialized BOOLEAN
);

CREATE TABLE climate(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  average_hi_F INT,
  average_low_F INT,
  average_precipitation_inches INT,
  region_id INT,
  FOREIGN KEY(region_id) REFERENCES region(id)  ON DELETE CASCADE
);

CREATE TABLE habitat(
   common_name VARCHAR(50),
   natural_disasters VARCHAR(50),
   problems VARCHAR(50)
);


INSERT INTO animals(common_name, scientific_name, diet, average_weight, color, behavior, life_expectancy, animal_habitat, animal_region) VALUES


("Irrawaddy Dolphin", "Orcaella brevirostris", "carnivore", 420, "grey", "diurnal", 30, 1, 1),
("Vaquita", "Phocoena sinus", "carnivore", 95, "grey", "diurnal", 21, 2, 2),
("Javan Rhino", "Rhinoceros sondaicus", "herbivore", 5000, "grey", "nocturnal", 30, 3, 3),
("Sumatran Rhino", "Dicerorhinus sumatrensis", "herbivore", 1100, "grey", "nocturnal", 35, 3, 4),
("Mountain Gorilla", "Gorilla beringei", "herbivore", 330, "black", "diurnal", 35, 3, 5),
("Indus River Dolphin", "Platanista minor", "carnivore", 170, "grey", "diurnal", 30, 1, 3),
("Giant Panda", "Ailuropoda melanoleuca", "herbivore", 350, "black, white", "crepuscular", 20, 4, 6),
("Borneo Pygmy Elephant", "Elephas maximus borneensis", "herbivore", 6500, "grey", "diurnal", 60, 3, 4),
("Sunda Tiger", "Panthera tigris sondaica", "carnivore", 165, "orange, black, white", "diurnal/nocturnal", 15, 5, 4),
("Yangtze Finless Porpoise", "Neophocaena asiaeorientalis", "carnivore", 160, "grey", "diurnal", 24, 1, 6),
("Galapagos Penguin", "Spheniscus mendiculus", "carnivore", 6, "black, white", "diurnal", 15, 2, 7),
("Sumatran Elephant", "Elephas maximus sumatranus", "herbivore", 4400, "grey", "diurnal", 60, 3, 4),
("Sri Lankan Elephant", "Elephas maximus maximus", "herbivore",  4400, "grey", "diurnal",   55, 3, 8),
("Snow Leopard", "Panthera uncia", "carnivore", 72, "black, grey", "nocturnal", 15, 4, 9),
("Red Panda", "Ailurus fulgens", "herbivore",  9, "red, white", "nocturnal", 23, 3, 9),
("African Wild Dog", "Lycaon pictus", "carnivore", 49 , "black, gold", "diurnal", 11, 6, 10),
("Sumatran Orangutan", "Pongo abelii", "herbivore",  99, "orange", "diurnal",  35, 3, 11),
("Bornean Orangutan", "Pongo pygmaeus", "herbivore", 110, "orange", "diurnal", 35, 3, 4),
("Bonobo", "Pan paniscus", "omnivore", 86, "black", "diurnal", 40, 3, 5),
("African Elephant", "Loxodonta africana", "herbivore",  13000, "grey", "diurnal", 60, 5, 5),
("Whale Shark", "Rhincodon typus", "carnivore", 41000 , "grey, white", "diurnal", 70, 2, 10),
("Black Rhino", "Diceros bicornis", "herbivore", 4000 , "brown/grey", "diurnal", 35, 6, 10),
("North Atlantic Right Whale", "Eubalaena glacialis", "carnivore", 88000, "black", "diurnal", 70, 2, 10),
("Tiger", "Panthera tigris", "carnivore", 200, "black, orange, white", "diurnal", 10, 3, 6),
("Amur Leopard", "Panthera pardus orientalis", "carnivore", 70, "black, orange, white", "nocturnal", 10, 4, 12)
;


INSERT INTO status(classification, population_current, population_2010, num_captivity, trend, animals_id) VALUES

("Endangered", 92, 85,  10, "increasing", 1),
("Critically Endangered", 10, 100, 5, "decreasing", 2),
("Critically Endangered", 68, 100, 0, "decreasing", 3),
("Critically Endangered", 80, 200, 7, "decreasing", 4),
("Endangered", 1000, 480, 0, "increasing", 5),
("Endangered", 1816, 1450, 0, "increasing", 6),
("Vulnerable", 1800, 1500, 600, "increasing", 7),
("Endangered",1500, 1850, 50, "decreasing", 8),
("Critically Endangered", 400, 2000, 300, "decreasing", 9),
("Critically Endangered",1800, 2100, 2, "decreasing", 10),
("Endangered", 2000, 2375, 100, "decreasing", 11),
("Critically Endangered", 2800, 3000, 1500, "decreasing", 12),
("Endangered", 2500, 5879, 120, "decreasing", 13),
("Vulnerable", 4080, 6625, 600, "decreasing", 14),
("Endangered", 10000, 11750, 759, "decreasing", 15),
("Endangered", 1409, 11750, 300, "decreasing", 16),
("Critically Endangered", 118000, 45000, 900,  "increasing", 17),
("Critically Endangered", 104700, 50000, 5000,  "increasing", 18),
("Endangered",10000 , 62500, 2000, "decreasing", 19),
("Vulnerable", 415000, 450000, 10000, "decreasing", 20),
("Endangered", 1400, 1000, 50,  "increasing", 21),
("Critically Endangered", 5500, 3000, 200,  "increasing", 22),
("Endangered", 300, 490, 0, "decreasing", 23),
("Endangered", 3900, 5000, 5000, "decreasing", 24),
("Critically Endangered", 37, 60, 170, "decreasing", 25)
;

INSERT INTO region(common_name, gdp_billions, continent, industrialized) VALUES
  ("Greater Mekong",  757, "Southeast Asia", true),
  ("Gulf of California", 20540, "United States of America", true),
  ("Indonesia", 1042, "Southeast Asia", true),
  ("Borneo and Sumatra", 1042, "Southeast Asia", true),
  ("Congo Basin", 47, "Central Africa", false),
  ("Yangtze", 13610, "China", true),
  ("Galápagos", 108, "South America", true),
  ("Broadleaf forest", 18800, "Eurasia", true),
  ("Eastern Himalayas", 29, "Asia", false),
  ("Coastal East Africa", 88, "Africa", false),
  ("Central Kalimantan", 1042, "Southeast Asia", true),
  ("Amur-Heilong", 239, "East Asia", true)
;

INSERT INTO climate(average_high_F, average_low_F, average_precipitation_inches, region_id) VALUES
  (89, 74, 1, 1),
  (75, 61, 15, 2),
  (93, 80, 200, 3),
  (95, 79, 157, 4),
  (77, 53, 47, 5),
  (90, 50, 43, 6),
  (84, 69, 2, 7),
  (60, 37, 58, 8),
  (60, 17, 6, 9),
  (97, 82, 40, 10),
  (89, 60, 103, 11),
  (73, -14, 75, 12)
;

INSERT INTO habitat(common_name, natural_disasters, problems) VALUES
  ("freshwater", "hurricane", "water pollution"),
  ("ocean", "hurricane", "water pollution"),
  ("forest", "forest fires", "deforestation"),
  ("mountains", "landslides", "habitat destruction"),
  ("grasslands", "droughts", "poaching"),
  ("desert", "flash floods", "poaching" )
;


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
WHERE classification = Vulnerable;



-- 2 change in population (links with animal name)
SELECT animals.common_name, status.population_current, status.population_2010
FROM status
JOIN animals
ON status.animals_id = animals.id;



-- 3 animal region and habitat linked
SELECT animals.common_name, region.common_name, region.continent, habitat.common_name
FROM animals
JOIN region
ON animals.animals_region = region.id
JOIN habitat
ON animals.animals_habitat = habitat.id;



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
SELECT status.classification
FROM status
JOIN(
  SELECT animals.common_name
  FROM animals
  JOIN(
	SELECT region.common_name, region.gdp_billions
    FROM region
    )ON animals.animals_region = region.id
) ON status.animals_id = animals.id
ORDER BY status.classification;



-- 7 status order alphabetically and only show decreasing trend
SELECT *
FROM status
WHERE trend = "decreasing"
ORDER BY classification ASC;


