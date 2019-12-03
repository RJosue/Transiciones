mvc.controller({
    name: "apl",
    action: "index",
    path: "/apl-test"
}, "aplQuest", function (req, aplQuest, send) {
    $apiResponse(aplQuest, send);
});