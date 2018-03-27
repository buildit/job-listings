import { getJobListingUrl, getJobPostings } from './sr-api';

const wiproDigitalId = 'WiproDigital';
const builditCustomFieldId = 'custom_field.5880c55be4b0cfde272956ad=83455af9-c888-4221-9312-4750b5a09bf5';
const builditTrId = '2f4a2735-7172-45dd-aca7-63618dca8aff';

/**
 * Fetches all currently advertised Buildit jobs.
 */
export async function getBuilditJobPostings() {
  return getJobPostings(wiproDigitalId, builditCustomFieldId);
}

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
