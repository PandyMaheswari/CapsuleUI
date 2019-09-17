import { MyTaskMangerPage } from './app.po';

describe('my-task-manger App', function() {
  let page: MyTaskMangerPage;

  beforeEach(() => {
    page = new MyTaskMangerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
