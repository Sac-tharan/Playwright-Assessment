export const Environment = {
  baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
  actionTimeout: Number(process.env.TIMEOUT) || 5000,
  Username: process.env.TEST_USERNAME || 'standard_user',
  Password: process.env.TEST_PASSWORD || 'secret_sauce',
};