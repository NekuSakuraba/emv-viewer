import { EmvViewerPage } from './app.po';

describe('emv-viewer App', () => {
  let page: EmvViewerPage;

  beforeEach(() => {
    page = new EmvViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
