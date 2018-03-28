# job-listings
Small JS library for fetching Buildit job listings data from SmartRecruiter's API.

## Installation

`npm install --save @buildit/job-listings`

## Usage

```js
// Import library
const JobListings = require('@buildit/job-listings');

// Fetch the latest Buildit job listings from SmartRecruiters' API.
// Note that getBuilditJobPostings() returns a Promise, which resolves
// to an array of job postings.
JobListings.getBuilditJobPostings()
  .then((jobs) => {
    jobs.forEach((job) => {

      console.log(job.title);
      // E.g. "Software Engineer"

      console.log(job.experienceLevel);
      // E.g. "Mid-Senior Level"
      
      console.log(job.typeOfEmployment);
      // E.g. "Full-time"

      console.log(job.location.city);
      // E.g. "Dublin"

      console.log(job.location.country);
      // E.g. "Ireland"

      console.log(job.url);
      // Outputs full URL to job ad page on SmartRecruiters,
      // including the "Buildit website" tracking ID.
    });
  })
  .catch((err) => {
    // Handle errors
  });
```

Currently, the library only exports the asynchronous `getBuilditJobPostings()` function. More functionality may be added in future - please raise an issue or a PR to let us know what you need.
