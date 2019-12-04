mvc.controller({
    name: "apl",
    action: "index",
    path: "/apl-test"
}, "verifyUser", "aplQuest", function (req, verifyUser, aplQuest, send) {
        verifyUser.verifyUser(req, send);
    $apiResponse(aplQuest, send);
});