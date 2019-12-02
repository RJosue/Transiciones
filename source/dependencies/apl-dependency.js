function aplData() {
    this.getAll = function (data) {
        var promise = new Promise(function (resolve) {
            //reestrcuturar la data
            resolve(structuration(data));
        })
        return promise; 
    }
}
function structuration(data) {
    var data = {
        "current": {
            "cue_pregunta": data[0].cue_pregunta,
            "index": 0,
            "respuesta": 0,
            "id": data[0].cue_id
        },
        "contenido": data
    }

    return data; 
}
mvc.dependencies.aplQuest = new aplData(); 