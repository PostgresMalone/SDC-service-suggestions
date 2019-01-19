CREATE DATABASE IF NOT EXISTS listings;

DROP TABLE IF EXISTS Homes;
DROP TABLE IF EXISTS Suggestions;

CREATE TABLE IF NOT EXISTS Homes (
  home_id  INT NOT NULL PRIMARY KEY,
  home_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Suggestions (
  suggestion_id INT NOT NULL PRIMARY KEY,
  CITY VARCHAR(255),
  COUNTRY VARCHAR(50),
  home_beds INT,
  home_relation_id INT, --fkey / INDEX
  home_thumbnail_img TEXT,
  home_price DECIMAL,
  STATES VARCHAR(50)
);

CREATE INDEX suggestion_id ON Suggestions (suggestion_id);

COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes1.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes2.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes3.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes4.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes5.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes6.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes7.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes8.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes9.csv' CSV HEADER;
COPY Homes
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Homes/Homes10.csv' CSV HEADER;

COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions1.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions2.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions3.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions4.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions5.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions6.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions7.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions8.csv' CSV HEADER;
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions9.csv' CSV HEADER;

