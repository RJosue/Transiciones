mvc.api(
  {
    name: "signin",
    action: "get",
    methods: {
      post: postMethod
    }
  },"verifyUser", function(req, send) {
    send({ user });
    // verifyUser.verifyUser(req.body.user, req.body.password);
  }
);

function postMethod(req, verifyUser, send) {
  var header = req;
  // console.log(header)
  verifyUser.verifyUser(req, send);
}