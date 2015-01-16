describe('HTTP Auth Mixin', function() {
  beforeEach(module('RestmodAuth'));

  var AuthSrv, restmod, $httpBackend;

  beforeEach(module(function ($provide) {
    AuthSrv = {
      isLogged: function() { return true; },
      getAuthorizationHeader: function() { return 'XXX'; }
    };
    $provide.value('AuthSrv', AuthSrv);
  }));

  beforeEach(inject(function (_restmod_, _$httpBackend_) {
    restmod = _restmod_;
    $httpBackend = _$httpBackend_;
  }));

  describe('Constructor', function () {
    it('set restmod HTTP Header requests with Auth key', function () {
      $httpBackend.expect('GET', 'bikes/1', undefined, function(headers) {
        return headers['Authorization'] == 'XXX';
      }).respond(201, '');

      var Bike = restmod.model('bikes').mix('HttpAuth');
      Bike.$find(1);

      $httpBackend.flush();
    });
  });

});
