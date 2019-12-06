mvc.api(
  {
    name: "signin",
    action: "get",
    methods: {
      post: postMethod
    }
  },"singIn",  function(req, send) {
    send({ user });
  }
);

function postMethod(req, singIn, send) {
  singIn.signIn(req).then(function (response) {
    send(response);
  });

}