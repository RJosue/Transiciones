
$.get("/api/apl/get/json", function (data, status) {
    // console.log(data)
    var response = data.response.data;
    view.setData("forma", response);
});


// request.get("api/apl/get/json", "", function (data) {
//     var datas = data.response.data;
//     console.log(datas);
//     view.setData("forma", datas);
// });
