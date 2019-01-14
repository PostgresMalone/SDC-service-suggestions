const faker = require('faker');
const fs = require('fs');
const SUGGESTION_ROWS_TO_WRITE = 10000000
const SUGGESTION_NEW_FILE_COUNT = 1000000
const HOMES_ROWS_TO_WRITE = 100000
const HOMES_NEW_FILE_COUNT = 10000


const randomArrayElement = (arr) => {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

const generateNumberBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bedNumberGenerator = () => {
  let beds = [1, 2, 3, 4];
  return randomArrayElement(beds);
};

const stateAbbreviationGenerator = () => {
  let stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
    "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
    "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC",
    "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR",
    "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA",
    "VI", "VT", "WA", "WI", "WV", "WY");

  return randomArrayElement(stateList);
};

const generateRandomPrice = () => {
  return `${generateNumberBetweenRange(1, 2000)}.${generateNumberBetweenRange(1, 99)}`;
}

const generateLoremWords = () => {
  let wordBank = ["Lorem", "ipsum", "dolor", "sit", "amet",
    "consectetur", "adipiscing", "elit", "sed",
    "do", "eiusmod", "tempor", "incididunt", "ut",
    "labore", "et", "dolore", "magna", "aliqua"];

  return `${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)}`
}

const generateCountry = () => {
  let countryArray = ['United States', 'Brazil', 'Taiwan', 'Belgium', 'Thailand', 'Vietnam', 'Spain', 'Malaysia', 'Ireland',
    'Costa Rica', 'Denmark', 'Cambodia', 'Laos', 'Canada', 'Mexico', 'Morocco', 'South Korea', 'Turkey', 'Venuzuela', 'Puerto Rico',]

  return randomArrayElement(countryArray);
}

const suggestionHeaders = ['id', 'home_id', 'home_image', 'home_thumbnail_img', 'home_beds', 'city',
  'states', 'country', 'house_name', 'house_price', 'reviews'];

const homesHeaders = ['home_id', 'home_name'];

const generateSuggestionCsv = () => {
  let i = 1;
  let fileNumber = 1;
  let stream;

  const generateCsvRow = () => {
    return [
      i,
      generateNumberBetweenRange(0, ROWS_TO_WRITE),
      faker.image.imageUrl(),
      faker.image.imageUrl(),
      bedNumberGenerator(),
      faker.address.city(),
      stateAbbreviationGenerator(),
      generateCountry(),
      generateLoremWords(),
      generateRandomPrice(),
      generateNumberBetweenRange(1, 10),
    ].join() + '\n';
  }

  const write = () => {
    let canContinue = true;
    while (i <= SUGGESTION_ROWS_TO_WRITE && canContinue) {
      if (i % SUGGESTION_NEW_FILE_COUNT === 1) {
        stream = fs.createWriteStream(`./data/Suggestions/Suggestions${fileNumber}.csv`, { flags: 'w' });
        stream.write(suggestionHeaders.join() + '\n');
        fileNumber += 1;
      }

      canContinue = stream.write(generateCsvRow())
      i += 1;
    };
    if (!canContinue) {
      stream.once('drain', () => { write() });
    }
  }
  write();
}

const generateHomesCsv = () => {
  let i = 1;
  let fileNumber = 1;
  let stream;

  const generateHomeRow = () => {
    return [
      i,
      faker.commerce.productName(),
    ].join() + '\n';
  }

  const write = () => {
    let canContinue = true;
    while (i <= HOMES_ROWS_TO_WRITE && canContinue) {
      if (i % HOMES_NEW_FILE_COUNT === 1) {
        stream = fs.createWriteStream(`./data/Homes/Homes${fileNumber}.csv`, { flags: 'w' });
        stream.write(homesHeaders.join() + '\n');
        fileNumber += 1;
      }

      canContinue = stream.write(generateHomeRow())
      i += 1;
    };
    if (!canContinue) {
      stream.once('drain', () => { write() });
    }
  }
  write();
}

generateSuggestionCsv();
generateHomesCsv();



