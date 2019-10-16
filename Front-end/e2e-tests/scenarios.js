'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /calculate when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/calculate");
  });


  describe('calculate', function() {

    beforeEach(function() {
      browser.get('index.html#!/calculate');
    });


    it('should render calculate when user navigates to /calculate', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for calculate/);
    });

  });
});
