const formatFullname = require('../formatFullname')
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is not a string', () => {
		expect(formatFullname(20)).to.equal('Error')
		expect(formatFullname(undefined)).to.equal('Error')
		expect(formatFullname({})).to.equal('Error')
		expect(formatFullname([])).to.equal('Error')
		expect(formatFullname(function () {})).to.equal('Error')
	});

    it('should return an error if "content" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });
    it('should return an error if one of "formatFullName" part length is 0', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
    });
    it('should return an error if "formatFullName" has more than 2 parts', () => {
        expect(formatFullname('John Doe Smith')).to.equal('Error');
    });
});