import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest.env.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  modulePathIgnorePatterns: ['/dist/'],
  collectCoverageFrom: ['packages/**/*.[jt]s', '!**/node_modules/**', '!**/dist/**'],
};

export default config;
