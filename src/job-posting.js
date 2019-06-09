import { getJobAdUrl, getJobPostingsData } from './sr-api';
import JobLocation from './job-location';

/**
 * A job posting.
 */
export default class JobPosting {
  constructor(srJobPosting, trId) {
    this.uuid = srJobPosting.uuid;
    this.title = srJobPosting.name;
    this.companyId = srJobPosting.company.identifier;
    this.experienceLevel = srJobPosting.experienceLevel.label;
    this.location = new JobLocation(srJobPosting.location);
    this.typeOfEmployment = srJobPosting.typeOfEmployment.label;
    this.trId = trId;
    this.industry = srJobPosting.industry.label;
    this.datePosted = srJobPosting.releasedDate;
  }

  /**
   * Returns the URL to this job's ad on SmartRecruiters.
   */
  get url() {
    return getJobAdUrl(this.companyId, this.uuid, this.trId);
  }
}

/**
 * Fetches job postings from SmartRecruiters' and returns them as JobPosting
 * objects.
 *
 * @param {*} companyId           The company ID (e.g. "WiproDigital")
 * @param {*} customFieldId       Optional custom field ID to filter results on
 * @param {*} customFieldValueId  Optional custom field value to use with the field ID
 * @param {*} trId                Optional tracking ID
 *
 * @return {Promise<Array>} Promise that resolves to an array of job posting objects.
 */
export async function getJobPostings(companyId, customFieldId, customFieldValueId, trId) {
  const postingsData = await getJobPostingsData(companyId, customFieldId, customFieldValueId);
  return postingsData.map(posting => new JobPosting(posting, trId));
}
