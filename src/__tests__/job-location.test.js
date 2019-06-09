import { getName } from 'country-list';
import JobLocation from '../job-location';

const srLocationData = {
  city: 'Dublin',
  region: 'County Dublin',
  country: 'ie',
};

const testKnownCountries = ['de', 'us', 'in'];

describe('constructor()', () => {
  test(('Initialises members correctly'), () => {
    const loc = new JobLocation(srLocationData);
    expect(loc.city).toBe(srLocationData.city);
    expect(loc.region).toBe(srLocationData.region);
    expect(loc.countryCode).toBe(srLocationData.country);
  });
});

describe('country getter', () => {
  test('Returns country names for known country codes', () => {
    const loc = new JobLocation(srLocationData);
    testKnownCountries.forEach((countryCode) => {
      loc.countryCode = countryCode;
      expect(loc.country).toBe(getName(countryCode));
    });
  });

  test('Returns undefined for unknown country codes', () => {
    const loc = new JobLocation(srLocationData);
    loc.countryCode = 'xxx';
    expect(loc.country).toBeUndefined();
  });
});

describe('city slug getter', () => {
  test('Returns a URI-friendly slug', () => {
    const testCityName = 'Weird city; name: with / special characters?';
    const loc = new JobLocation(srLocationData);
    loc.city = testCityName;
    expect(loc.citySlug).toBe(encodeURIComponent(testCityName.toLocaleLowerCase()));
  });
});

describe('uri getter', () => {
  test('Returns correct location URI', () => {
    const loc = new JobLocation(srLocationData);
    expect(loc.uri).toContain(loc.citySlug);
    expect(loc.uri).toContain(loc.countryCode);
  });
});
