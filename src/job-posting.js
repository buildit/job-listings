import { getJobAdUrl } from './sr-api';
import { countryCodes } from './constants';

/**
 * Fetches the country name associated with the given 2 letter country code.
 *
 * Note, if the country code is not recognised, undefined is returned.
 *
 * @param {String} countryCode   2 letter country code (as provided by SR's data)
 */
function getCountryName(countryCode) {
  return countryCodes[countryCode];
}

/**
 * A job posting.
 */
export default class JobPosting {
  constructor(srJobPosting, trId) {
    this.uuid = srJobPosting.uuid;
    this.title = srJobPosting.name;
    this.companyId = srJobPosting.company.identifier;
    this.experienceLevel = srJobPosting.experienceLevel.label;
    this.location = {
      city: srJobPosting.location.city,
      region: srJobPosting.location.region,
      countryCode: srJobPosting.location.country,
      get country() {
        return getCountryName(this.countryCode);
      },
    };
    this.typeOfEmployment = srJobPosting.typeOfEmployment.label;
    this.trId = trId;
  }

  /**
   * Returns the URL to this job's ad on SmartRecruiters.
   */
  get url() {
    return getJobAdUrl(this.companyId, this.uuid, this.trId);
  }
}
