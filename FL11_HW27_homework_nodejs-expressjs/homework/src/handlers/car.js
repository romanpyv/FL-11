const fs = require('fs');
const dbPath = 'db/data.json';
const db = JSON.parse(fs.readFileSync(dbPath));

function refreshDb(db) {
    fs.writeFile(dbPath, JSON.stringify(db), 'utf8', err => {
        if (err) {
            console.log("An error occured while saving data.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
}

module.exports.carGet = function (req, res) {
    console.log('Car get');

    res.status(200).send(db);
};

module.exports.carPost = function (req, res) {
    console.log('Car post');
    let data = req.body;

    console.log(db.find(i => i.id === data.id));

    if(db.find(i => i.id === data.id)) { // if exists
        res.status(409).send({message: 'Car already exists.'});
        return;
    }

    db.push(data);

    refreshDb(db);

    res.status(201).send(data);
};

module.exports.carGetById = function (req, res) {
    console.log("Car get by id");
    let id = req.params.id, result = db.find(i => i.id == id);

    if(!result){
        res.status(404).send();
        return;
    }

    res.status(200).send(result);
};

module.exports.carPutById = function (req, res) {
    console.log("Car put by id");
    let id = req.params.id, result = db.find(i => i.id == id), car = req.body;

    if(!result){
        res.status(404).send();
        return;
    }

    db[db.indexOf(result)] = car;

    refreshDb(db);

    res.status(200).send(car);
};

module.exports.carDeleteById = function (req, res) {
    console.log("Car delete by id");

    let id = req.params.id, result = db.find(i => i.id == id);

    console.log(id, result);

    if(!result){
        res.status(404).send();
        return;
    }

    db.splice([db.indexOf(result)], 1);

    refreshDb(db);

    res.status(200).send({message: 'The car has been successfully removed'});
};
