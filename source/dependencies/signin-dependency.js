function SignIn() {
    this.verifyUser = function (datas, send) {
        
         plugdo.collect("verifyUser").get(datas, (data, err) => {
           if (err !== undefined) {
             // End the current request if a error exists
               send({},err);
           } else {
               var response = {}
               response.result = data;
               console.log(JSON.stringify(response));
               send(response);
           }
         });
    }
}

mvc.dependencies.verifyUser = new SignIn();
