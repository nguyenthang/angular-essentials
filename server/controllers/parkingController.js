var carModel = require('../models');

function getCars(req, res){
	var cars = [{
				id: 1,
				plate: "6MBV006",
				color: "Blue",
				entrance: "2013-12-09T23:46:15.186Z"
			},{
				id: 2,
				plate: "6MBV009",
				color: "Gray",
				entrance: "2013-12-09T23:46:15.186Z"
			},{
				id: 3,
				plate: "6MBV116",
				color: "Green",
				entrance: "2013-12-09T23:46:15.186Z"
			}];

			

	res.json(cars);
}

/*
 To save a new car
*/
function saveCar(req, res){
	/*
	Create a new car
	 */
	var newCar = new carModel.Car({
		plate: req.body.plate,
		color: req.body.color		
	});

	newCar.save(function(err, car){
		console.log("Inserted" + car.plate);
	});

	console.log("SSS" + req.body.plate);
}

function getCar(req, res){
	console.log('ID' + req.params.id);
	//res.json({true});
}

module.exports = {getCars, saveCar, getCar};