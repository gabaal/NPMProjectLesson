const chai = require('chai');
const expect = chai.expect;
const { getJoke } = require('./src/index.js');

describe('getJoke', () => {
    it('should return a valid one-liner joke', () => {
      const joke = getJoke();
      expect(joke).to.be.an('string');
    });
});