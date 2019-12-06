let { cookie } = plugdo;
mvc.controller({
    name: "apl",
    action: "apl-test",
    path: "/apl-test"
}, "validateUser", "aplQuest", function (req, validateUser, aplQuest, send) {
        var access_token = req.headers.cookie;
        // if (access_token.length > 0) {
            // if (validateUser.validateToken(access_token)) {
            //     $apiResponse(aplQuest, send);
            // } else {
            //     alert("No has iniciado session");
            //     window.location.href = ""
            // } 
            validateUser.validateToken(access_token).then(function (result, err) {
                if (!result) {
                    send({}, err);
                }
                else {
                    send();
                }
            });
        
});
