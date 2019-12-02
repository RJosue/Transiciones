
function DataUser() { 
    this.User = function () {
        var promise = new Promise(function (resolve) {
            var model = {
                name: "Raul",
                age: 20
            }

            resolve(model)
        }) 
        return promise;
    }
}

mvc.dependencies.DataUser = new DataUser();