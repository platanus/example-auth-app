(function() {
  'use strict';

  angular
    .module('RestmodAuth', [])
    .service('AuthSrv', AuthSrv);

  function AuthSrv() {
    var service = {
      store: store,
    };

    return service;

    ////////////

    function store(_auth_data) {
      /* */
    }
  }

})();
