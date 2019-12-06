mvc.api(
  {
    name: "registro",
    action: "candidato",
    methods: {
      post: postMethod
    }
  },
  "registroCandidato",function(req,registroCandidato,send) {
    return {};
  }
);

function postMethod(req,registroCandidato,send) {
  mesasage = req.body;
  registroCandidato.cargarDatos(mesasage).then(function (response) {
    console.log(response);
    send(response);
  });
}