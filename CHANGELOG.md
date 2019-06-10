# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2019-06-10

### Added
- Job locations now have a `.uri` getter
- Support for all countries' names

### Changed
- **BREAKING**: Job location's `.citySlug` getter may produce different output than before, as it kebabcases the input before URI encoding it

## [1.1.0] - 2019-03-07

### Changed
- Bumped dependency versions
- Added `industry` and `datePosted` fields to job objects


## [1.0.1] - 2018-04-03

### Fixed
- Added lib directory, which was excluded from published package


## [1.0.0] - 2018-04-03

### Added
- Initial release of Buildit's job-listings library
