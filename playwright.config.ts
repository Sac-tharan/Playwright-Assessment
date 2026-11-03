import { defineConfig, devices } from '@playwright/test';
import { Environment } from './src/config/Environment';

export default defineConfig({

    // Test location
    testDir: './tests',

    // Run tests in parallel
    fullyParallel: true,

    // Prevent accidental test.only in CI
    forbidOnly: !!process.env.CI,

    // Retry failed tests in CI
    retries: process.env.CI ? 2 : 0,

    // Parallel workers
    workers: process.env.CI ? 2 : undefined,

    // Report configuration
    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }]
    ],
    // Common test settings
    use: {

        baseURL: Environment.baseURL,

        headless: true,

        screenshot: 'only-on-failure',

        trace: 'retain-on-failure',

        video: 'retain-on-failure',

        // actionTimeout: Environment.timeout

    },

    // Browser configuration
    projects: [
        // {
        //     name: 'setup',
        //     testMatch: /auth\.setup\.ts/
        // },
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ],

    // Test output
    outputDir: 'test-results'

});