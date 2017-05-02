import { RecepiesBookPage } from './app.po';

describe('recepies-book App', () => {
  let page: RecepiesBookPage;

  beforeEach(() => {
    page = new RecepiesBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
