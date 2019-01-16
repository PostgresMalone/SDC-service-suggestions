DROP TABLE IF EXISTS Suggestions;

CREATE TABLE IF NOT EXISTS Suggestions (
  dummy_id INT NOT NULL,
  suggestion_id INT NOT NULL,
  CITY VARCHAR(255) NOT NULL,
  COUNTRY VARCHAR(50) NOT NULL,
  home_beds INT NOT NULL,
  home_name TEXT NOT NULL,
  home_relation_id TEXT NOT NULL,
  home_thumbnail_img TEXT NOT NULL,
  home_price DECIMAL NOT NULL,
  STATES VARCHAR(50) NOT NULL
);

-- CREATE INDEX city
-- ON Suggestions (CITY);

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
COPY Suggestions
FROM '/Users/albertscomputer/HRSF107/systems-design-capstone/SDC-service-suggestions/db/data/Suggestions/Suggestions10.csv' CSV HEADER;


