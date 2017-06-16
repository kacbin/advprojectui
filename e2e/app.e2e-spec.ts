import { AdvprojectPage } from './app.po';

describe('advproject App', () => {
  let page: AdvprojectPage;

  beforeEach(() => {
    page = new AdvprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
