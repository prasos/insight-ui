'use strict';

angular.module('insight')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start; //parse to int
      return input.slice(start);
    }
  })
  .filter('split', function() {
    return function(input, delimiter) {
      var delimiter = delimiter || ',';
      return input.split(delimiter);
    }
  })
  .filter('formatByte', function () {
    return function (size, useBinary) {
      var base, prefixes;

      if (useBinary) {
        base = 1024;
        prefixes = ['Ki','Mi','Gi','Ti','Pi','Ei','Zi','Yi'];
      }
      else {
        base = 1000;
        prefixes = ['k','M','G','T','P','E','Z','Y'];
      }

      var exp = Math.log(size) / Math.log(base) | 0;
      return (size / Math.pow(base, exp)).toFixed(1) + ' ' +
        ((exp > 0) ? prefixes[exp - 1] + 'B' : 'B');
    };
  });
