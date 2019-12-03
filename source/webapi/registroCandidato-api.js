mvc.api({
    name: "registro",
    action: "candidato",
    methods: {
        post: postMethod
    }
}, function (req, send) {   
    send({hola:"hola"});
});

function postMethod (req, send) {
    console.log(req.body);


    
    send(req.body);
}