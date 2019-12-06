mvc.api({
    name: "userId",
    action: "get"
}, "userServices", function (req, userServices, send) {
        var token = req.plugdo.header.cookie;
        var response = userServices.getUserId(token);
        send(response);
})