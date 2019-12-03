mvc.api(
  {
    name: "registro",
    action: "candidato",
    methods: {
      post: postMethod
    }
  },
  function(req, send) {
    return { hola: "hola" };
  }
);

function postMethod(req, send) {
  mesasage = req.body;
  let response = {};
  plugdo.collect("registroCandidato").get(mesasage, function(data, err) {
    if (err) {
      send({}, err);
    }
    response.result = data;
    send(response);
  });
}
// let { ready, validator, binder, request } = plugdo;
// binder();
// name="Cname"  eui-bind="requestDemo.Cname"


// var messagedata = {Email : requestMessage.Email.value,
// Name : requestMessage.Name.value,Message : requestMessage.Message.value};