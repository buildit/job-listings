import kebabcase from 'lodash.kebabcase';
import { getName } from 'country-list';

export default class JobLocation {
  constructor(srLocation) {
    this.city = srLocation.city;
    this.region = srLocation.region;
    this.countryCode = srLocation.country;
  }

  get country() {
    return getName(this.countryCode);
  }

  get citySlug() {
    return encodeURIComponent(kebabcase(this.city));
  }

  /**
   * The Buildit URI for this job location.
   *
   * See https://github.com/buildit/buildit/blob/develop/docs/metadata.md#resoure-uris
   */
  get uri() {
    return `https://buildit.wiprodigital.com/thing/job-location/${this.countryCode}/${this.citySlug}`;
  }
}
