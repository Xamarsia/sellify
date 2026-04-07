/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  transform: {
    ".(ts|tsx)": "ts-jest",
  },

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  collectCoverageFrom: [
    "**/src/**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/.pnpm-store/**",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: ".coverage",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["json", "text"],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/node_modules/"],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "babel",

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>"],

  // Allows you to use a custom runner instead of Jest's default test runner
  runner: "jest-runner",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
