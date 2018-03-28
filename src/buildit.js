import { getJobListingUrl, getJobPostings } from './sr-api';
import {
  wiproDigitalId,
  builditTrId,
  builditCustomFieldId,
  builditCustomFieldValue,
} from './constants';

/**
 * Constructs the full URL to a Buildit job listing page on SmartRecruiters.
 *
 * Note: This appends a tracking ID that will associate job
 * applications with the "Buildit website" custom source in
 * SR's analytics. The URLs returned by this function must
 * therefore _only_ be used within the Buildit website.
 *
 * @param {*} jobUuid
 */
export function getBuilditJobListingUrl(jobUuid) {
  return getJobListingUrl(wiproDigitalId, jobUuid, builditTrId);
}

/**
 * Fetches all currently advertised Buildit jobs.
 */
export async function getBuilditJobPostings() {
  return getJobPostings(wiproDigitalId, builditCustomFieldId, builditCustomFieldValue);
}
