const faker = require('faker');
const fs = require('fs');
const FILES_TO_GENERATE = 20;

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
  let wordBank = ["Lorem", "ipsum", "dolor", "sit", "amet,",
    "consectetur", "adipiscing", "elit,", "sed",
    "do", "eiusmod", "tempor", "incididunt", "ut",
    "labore", "et", "dolore", "magna", "aliqua"];

  return `${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)}`
}

const generateCsvRow = () => {
  return [
    generateNumberBetweenRange(0, 50),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    bedNumberGenerator(),
    faker.address.city(),
    stateAbbreviationGenerator(),
    faker.address.country(),
    generateLoremWords(),
    generateRandomPrice(),
    generateNumberBetweenRange(1, 100),
  ].join() + '\n';
}

const headers = ['id', 'home_image', 'home_thumbnail_img', 'home_beds', 'city',
  'state', 'country', 'house_name', 'house_price', 'reviews'];

const generateCsv = (stream) => {

  let i = 500000;
  write();

  function write() {
    let canContinue = true;
    do {
      i--;
      if (i === 0) {
        stream.write(generateCsvRow());
      } else {
        canContinue = stream.write(generateCsvRow());
      }
    } while (i > 0 && canContinue);
    if (i > 0) {
      stream.once('drain', () => write());
    }
  }
}

for (i = 0; i < FILES_TO_GENERATE; i++) {
  const suggestionStream = fs.createWriteStream(`suggestionCsv${i}.csv`, { flags: 'w' });
  suggestionStream.write(headers.join() + '\n');
  generateCsv(suggestionStream)
}