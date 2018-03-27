
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



