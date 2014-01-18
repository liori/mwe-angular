/*
 * Put whatever MWE behavior you want here. It can use JQuery, AngularJS and
 * Jasmine.
 *
 * For example...
 */

angular.module('app', []).directive('foo', function() {
  return {
    template: '<input ng-model="foo"></input>',
    restrict: 'E',
  };
});

describe('test', function() {
  beforeEach(module('app'));

  it('does stuff', inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    elm = $compile('<foo></foo>')(scope);

    elm.find('input').val('alive').trigger('input');

    expect(scope.foo).toBe('alive');
  }));
});

/*
 * Jasmine boilerplate for running tests and displaying the results.
 */
$(document).ready(function() {
  var jasmineEnv = jasmine.getEnv();
  var htmlReporter = new jasmine.HtmlReporter(document);
  jasmineEnv.addReporter(htmlReporter);
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
  
  // Useful when you autorefresh the output, have a console window opened and
  // want to see when the results are fresh.
  console.log('Tests finished.');
});
