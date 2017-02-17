import { DoyourjobFrontendPage } from './app.po';

describe('doyourjob-frontend App', () => {
  let page: DoyourjobFrontendPage;

  beforeEach(() => {
    page = new DoyourjobFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
