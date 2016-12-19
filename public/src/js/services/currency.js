'use strict';

angular.module('insight.currency').factory('Currency',
  function($resource) {
    return $resource('https://bittiraha.fi/vaihtokurssi.php');
});
