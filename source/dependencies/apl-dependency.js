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
            "cue_id": data[0].cue_id,
            "cue_pregunta": data[0].cue_pregunta,
            "cue_variacion": data[0].cue_variacion,
            "index": 0,
            "respuesta": 0,
        },
        "contenido": data
    }

    return data; 
}

mvc.dependencies.aplQuest = new aplData(); 