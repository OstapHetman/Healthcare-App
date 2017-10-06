import { HealthcareAppPage } from './app.po';

describe('healthcare-app App', () => {
  let page: HealthcareAppPage;

  beforeEach(() => {
    page = new HealthcareAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
