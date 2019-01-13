const faker = require('faker');
const fs = require('fs');
const FILES_TO_GENERATE = 2;

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

const homesHeaders = ['id', 'home_name'];



//Break 
const generateSuggestionCsv = (stream) => {
  let i = 0;
  let numRows = 100;
  write();

  function generateCsvRow() {
    return [
      i,
      generateNumberBetweenRange(0, numRows),
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

  function write() {
    let canContinue = true;
    do {
      i++;
      if (i === numRows) {
        stream.write(generateCsvRow());
      } else {
        canContinue = stream.write(generateCsvRow());
      }
    } while (i < numRows && canContinue)
    if (i < numRows) {
      stream.once('drain', () => write());
    }
  }
}

const generateHomesCsv = (stream) => {
  let j = 0;
  let numRows = 100;
  write();

  function generateHomeRow() {
    return [
      j,
      faker.commerce.productName(),
    ].join() + '\n';
  }

  function write() {
    let shouldContinue = true;
    do {
      j++;
      if (j === numRows) {
        stream.write(generateHomeRow()); //Function to generate a row
      } else {
        shouldContinue = stream.write(generateHomeRow()) //Function to generate a row
      }
    } while (j < numRows && shouldContinue)
    if (j < numRows) {
      stream.once('drain', () => write());
    }
  }
}


for (let k = 0; k < FILES_TO_GENERATE; k++) {
  const suggestionStream = fs.createWriteStream(`Suggestions${k}.csv`, { flags: 'w' });
  const homesStream = fs.createWriteStream(`Homes${k}.csv`, { flags: 'w' });
  suggestionStream.write(suggestionHeaders.join() + '\n');
  homesStream.write(homesHeaders.join() + '\n');
  generateSuggestionCsv(suggestionStream)
  generateHomesCsv(homesStream)
}