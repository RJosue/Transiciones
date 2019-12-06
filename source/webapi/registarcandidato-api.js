mvc.api(
    {
      name: "registrar",
      action: "candidato",
      methods: {
        post: postMethod
      }
    },"registarCandidato",function(req,registarCandidato,send) {
      data = req.plugdo.querystring
     registarCandidato.validarUsuario(data).then(function(response){
          send(response);
     });
    }
  );
  
  function postMethod(req, registarCandidato,send) {
    data = req.body;
    registarCandidato.cargarDatos(data).then(function(response){
      send(response);
    });
  }
