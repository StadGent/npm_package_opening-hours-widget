# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- DMOH-55: Fixed not sending the user-key if no value is set.

## [0.1.0] - 2019-02-27

### Updated

- Replaced http endpoint by https.

### Added

- DMOH-55: Added support to send user-key authentication due to changes in the
  Opening Hours service endpoint.

## [0.0.4] - 2019-01-16

### Added

- polyfill for `Object.assign`
- Click and keyboard events for the days in the month widget.

### Updated

- Move ajax methods to `./src/api` folder

## [0.0.3] - 2018-12-07

### Added

- `pad` utility function which pads strings with a specified character

### Fixed 

- Unformatted date in `fetchOpeningHoursByRange`

## [0.0.2] - 2018-12-06

### Added

- `.npmignore` which removes tests from the npm package

### Fixed

- Removed trailing slashes from endpoint in config

## [0.0.1] - 2018-11-30

### Added

- API methods for the opening hours REST api

[0.1.0]: https://github.com/StadGent/npm_package_opening-hours-widget/compare/v0.0.4...0.1.0
[0.0.4]: https://github.com/StadGent/npm_package_opening-hours-widget/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/StadGent/npm_package_opening-hours-widget/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/StadGent/npm_package_opening-hours-widget/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/StadGent/npm_package_opening-hours-widget/releases/tag/v0.0.1
[Unreleased]: https://github.com/StadGent/npm_package_opening-hours-widget/compare/master...develop
