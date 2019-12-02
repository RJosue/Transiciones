mvc.controller({
    name: "apl",
    action: "index",
    path: "/"
}, "aplQuest", function (req, aplQuest, send) {
    $apiResponse(aplQuest, send);
});