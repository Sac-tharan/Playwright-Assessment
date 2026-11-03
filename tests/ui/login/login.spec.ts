import {test,} from '../../../src/fixtures/testFixtures';
import { Environment } from '../../../src/config/Environment';

test.describe('demo login test', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToBaseURL();
    });
    test('successful login with valid credentials', async ({ loginPage }) => {
        await loginPage.login(Environment.Username, Environment.Password);
    });  
});