var Todo     = require('../models/todo');
var Hall     = require('../models/halls');
var User     = require('../models/user');
var passport = require('passport');
var jwt      = require('jsonwebtoken');
var tokenSecret = 'L0n9_l1v3_1337_h4x0rz';


function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
}

function getHalls(res){
	Hall.find(function(err, halls) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(halls); // return all todos in JSON format
		});
}


module.exports = function (app) {

    // auth:

    app.post('/auth/signup', function(req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            res.json(user); // returns json even without these lines (?)
        })(req, res, next);
    });

    app.post('/auth/login', function(req, res, next) {
        //console.log(JSON.stringify(req));
        passport.authenticate('local-login', function (err, user, info) {
            if (err) { return next(err); }

            if (user) {
            	//console.log(JSON.stringify(jwt));
				var token = jwt.sign({ username: user.local.email}, tokenSecret, false);
                res.json({
                    user: user,
                    success: true,
                    token: token
                });
            } else {
                res.json(401, {
                    error: info,
                    success: false,
                    user: undefined
                });

            }
            console.log("User authenticated successfully!>"+JSON.stringify(user)+"<");
            //console.log(info);
        })(req, res, next);
    });


    app.get('/api/halls', function(req, res) {
        Hall.find(function(err, halls) {
            if (err)
				res.send(err);

			res.json(halls);
		});
	});

	app.post('/api/halls', function(req, res) {

		Hall.create({
			name     : req.body.name,
			location : req.body.location,
			capacity : req.body.capacity,
			price    : req.body.price
		}, function(err, hall) {
			if (err)
				res.send(err);

            Hall.find(function(err, halls) {
				if (err)
					res.send(err);
				res.json(halls);
			});

		});
	});

	app.delete('/api/halls/:hall_id', function(req, res) {
		Hall.remove({
            _id : req.params.hall_id
		}, function(err, todo) {
            if (err)
                res.send(err);

            Hall.find(function(err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
		});
	});

	app.get('/api/halls/:hall_id', function(req, res) {
        Hall.find({
            _id: req.params.hall_id
        }, function(err, hall){
            if (err)
                res.send(err);
            res.json(hall);
        });
    });

    app.get('/api/halls/search/:q', function(req, res) {
        Hall.find({
            name: new RegExp(req.params.q, "i")
        }, function(err, hall){
            if (err)
                res.send(err);
            results = [];
            for (h in hall) results.push({name: hall[h]["name"]});
            res.json(results);
        });
    });

    app.get('/api/todos', function(req, res) {
        Todo.find(function(err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        });
    });



    app.post('/api/todos', function(req, res) {
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
        });

    });

    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);
                res.json(todos);
            });
        });
    });

	app.get('*', function(req, res) {
        res.sendfile('./app/index.html');
    });

};
