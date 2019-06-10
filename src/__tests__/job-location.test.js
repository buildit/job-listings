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
    const testCityName = 'Weird çity; name: 패션뷰티 with / special charäctèrs?';
    const testCitySlug = 'weird-city-name-%ED%8C%A8%EC%85%98%EB%B7%B0%ED%8B%B0-with-special-characters';
    const loc = new JobLocation(srLocationData);
    loc.city = testCityName;
    expect(loc.citySlug).toBe(testCitySlug);
  });
});

describe('uri getter', () => {
  test('Returns correct location URI', () => {
    const loc = new JobLocation(srLocationData);
    expect(loc.uri).toBe('https://buildit.wiprodigital.com/thing/job-location/ie/dublin');
  });
});
