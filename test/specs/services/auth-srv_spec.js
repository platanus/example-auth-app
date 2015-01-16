describe('AuthSrv', function() {
  var AuthSrv;

  beforeEach(module('RestmodAuth'));
  beforeEach(inject(function(_AuthSrv_) {
    AuthSrv = _AuthSrv_;
  }));

  describe('#store', function () {

    it('stores the token', function() {
      var authData = {uid: "charles@manson.com", token: "XXX"};
      AuthSrv.store(authData);
      expect(localStorage.getItem('token')).to.equal('XXX');
    });

    it('throws an exception if is not an {}', function() {
      expect(function() { AuthSrv.store("XXX") }).to.throw(Error);
    });

    it('stores the uid', function() {
      var authData = {uid: "charles@manson.com", token: ""};
      AuthSrv.store(authData);
      expect(localStorage.getItem('uid')).to.equal('charles@manson.com');
    });

    it('throws an exception if only token was passed', function() {
      expect(function() { AuthSrv.store({token: "XXX"}) }).to.throw(Error);
    });

  });
});
