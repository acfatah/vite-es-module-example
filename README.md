# Vite ES Module Example

<p>
  <a href="./LICENSE">
  <img alt="GitHub" src="https://img.shields.io/github/license/acfatah/vite-es-module?style=flat-square"></a>

  <a href="https://dl.circleci.com/status-badge/redirect/gh/acfatah/vite-es-module/tree/main">
  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/acfatah/vite-es-module?label=circleci&style=flat-square" target="_blank"></a>

  <a href="https://codeclimate.com/github/acfatah/vite-es-module">
  <img alt="Code Climate maintainability" src="https://img.shields.io/codeclimate/maintainability/acfatah/vite-es-module?style=flat-square" target="_blank"></a>

  <a href="https://codeclimate.com/github/acfatah/vite-es-module">
  <img alt="Code Climate coverage" src="https://img.shields.io/codeclimate/coverage/acfatah/vite-es-module?style=flat-square" target="_blank"></a>

  <a href="https://github.com/acfatah/vite-es-module/commits/main">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/vite-es-module?display_timestamp=committer&style=flat-square"></a>
</p>

Yet another example of ES Module package that uses Vite and Vitest for development.

## Features

- Uses Vite for development server and build
- Uses Vitest for testing
- Uses ESLint with Antfu's config
- Uses Release-it for releasing
- Uses [Codeclimate](https://codeclimate.com/quality) for the code quality control
- Uses [CircleCI](https://circleci.com/product/) as the CI/CD platform

## Usage

```bash
npx degit acfatah/vite-es-module your_module
```

### Usage Checklist

- [ ] Rename `vite-es-module` to your own module name in all files.
- [ ] Rename relevant information in `package.json`.
- [ ] Update `vite.config.js`.
- [ ] Update `LICENCE`.
- [ ] Update REQUIRE_CC_TEST_REPORTER_ID in `.circleci/config.yml` or completely remove the configuration directory. The token can be found on your Repo Settings page in Code Climate application page.
- [ ] Remove `.codeclimeate.yml` if you are not using the service.
- [ ] Update `README.md`.
