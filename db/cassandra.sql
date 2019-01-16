DROP KEYSPACE IF EXISTS listings;
CREATE KEYSPACE listings
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE listings;

DROP TABLE IF EXISTS Suggestions;

CREATE TABLE Suggestions (
  dummy_id INT,
  home_relation_id INT, 
  CITY text,
  COUNTRY text,
  home_beds INT,
  home_name text,
  home_price float,
  home_thumbnail_img text,
  STATES text,
  suggestion_id INT,
  PRIMARY KEY (dummy_id, home_relation_id)
)

WITH CLUSTERING ORDER BY (home_relation_id DESC);

COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
  home_relation_id, home_thumbnail_img, home_price, states)
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions1.csv' 
WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions2.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions3.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions4.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions5.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions6.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions7.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions8.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions9.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;

-- COPY Suggestions (dummy_id, suggestion_id, city, country, home_beds, home_name,
--   home_relation_id, home_thumbnail_img, home_price, states)
-- FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions10.csv' 
-- WITH DELIMITER = ',' AND HEADER = true;