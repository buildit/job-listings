import { URL } from 'url';
import * as builditApi from './buildit';
import {
  wiproDigitalId,
  builditTrId,
  builditCustomFieldId,
  builditCustomFieldValue,
} from './constants';

const jobUuid = '22d904e8-27cd-41d6-b850-f03528167654';

describe('getBuilditJobListingUrl', () => {
  test('URL path contains WiproDigital companyId', () => {
    const url = new URL(builditApi.getBuilditJobListingUrl(jobUuid));
    const path = url.pathname;
    expect(path).toEqual(expect.stringContaining(wiproDigitalId));
  });

  test('URL path contains jobUuid', () => {
    const url = new URL(builditApi.getBuilditJobListingUrl(jobUuid));
    const path = url.pathname;
    expect(path).toEqual(expect.stringContaining(jobUuid));
  });

  test('URL has Buildit website trId set in query string params', () => {
    const url = new URL(builditApi.getBuilditJobListingUrl(jobUuid));
    expect(url.searchParams.get('trid')).toBe(builditTrId);
  });
});

describe('getBuilditJobPostings()', () => {
  test('returns only jobs containing the Buildit custom field', async () => {
    const jobs = await builditApi.getBuilditJobPostings();

    // Try to find a job that does NOT contain the custom field
    let nonMatchingJobFound = false;
    for (let i = 0; i < jobs.length; i += 1) {
      const job = jobs[i];
      // eslint-disable-next-line arrow-body-style
      const filteredFields = job.customField.filter((field) => {
        return field.fieldId === builditCustomFieldId && field.valueId === builditCustomFieldValue;
      });
      if (filteredFields.length === 0) {
        nonMatchingJobFound = true;
        break;
      }
    }
    expect(nonMatchingJobFound).toBe(false);
  });
});
