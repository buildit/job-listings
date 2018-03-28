import fetch from 'cross-fetch';

/**
 * Constructs the full URL for SmartRecruiters' Posting API
 * endpoint.
 *
 * @see https://dev.smartrecruiters.com/customer-api/posting-api/endpoints/postings/
 *
 * @param {*} companyId   The company ID (e.g. "WiproDigital")
 */
function getPostingEndpointUrl(companyId) {
  return `https://api.smartrecruiters.com/v1/companies/${companyId}/postings`;
}

/**
 * Constructs the full URL for a job listing page on SmartRecruiters.
 *
 * @param {*} companyId   The company ID (e.g. "WiproDigital")
 * @param {*} jobUuid     The job's UUID
 * @param {*} trId        Optional tracking ID.
 */
export function getJobListingUrl(companyId, jobUuid, trId) {
  const queryString = trId ? `?trid=${trId}` : '';
  return `https://jobs.smartrecruiters.com/ni/${companyId}/${jobUuid}${queryString}`;
}

/**
 * Fetches job listings data from SmartRecruiters' Posting API.
 *
 * @see https://dev.smartrecruiters.com/customer-api/posting-api/endpoints/postings/
 *
 * @param {*} companyId           The company ID (e.g. "WiproDigital")
 * @param {*} customFieldId       Optional custom field ID to filter results on
 * @param {*} customFieldValueId  Optional custom field value to use with the field ID
 */
export async function getJobPostings(companyId, customFieldId, customFieldValueId) {
  const queryString = customFieldId ? `?custom_field.${customFieldId}=${customFieldValueId}` : '';
  const url = getPostingEndpointUrl(companyId) + queryString;
  const response = await fetch(url);
  const json = await response.json();
  return json.content; // actual jobs array
}
