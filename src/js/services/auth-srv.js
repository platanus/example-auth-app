(function() {
  'use strict';

  angular
    .module('RestmodAuth')
    .service('AuthSrv', AuthSrv);

  AuthSrv.$inject = ["LocalDataSrv"];

  function AuthSrv(LocalDataSrv) {
    var service = {
      store: store,
      isLogged: isLogged
    };

    return service;

    ////////////

    function isLogged() {
      return (!!LocalDataSrv.getKey('uid') && !!LocalDataSrv.getKey('token'));
    }

    function store(_auth_data) {
      if (!angular.isObject(_auth_data)) {
        throw new Error("an object was expected to store");
      }

      if (_auth_data.token) {
        if (!_auth_data.uid) {
          throw new Error("A uid is need ");
        }
        LocalDataSrv.setKey('token', _auth_data.token);
      }

      if (_auth_data.uid) {
        LocalDataSrv.setKey('uid', _auth_data.uid);
      }
    }
  }

})();
