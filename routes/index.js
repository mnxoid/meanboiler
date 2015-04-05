var Todo = require('../models/todo');
var Hall = require('../models/halls');

function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};

module.exports = function (app) {

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
			}), function (err, hall) {
				if (err)
					res.send(err);

				Hall.find(function(err, halls) {
					if (err)
						res.send(err);
					res.json(halls);
				});

			}
		});

		app.delete('/api/halls/:hall_id', function(req, res) {
			Hall.remove({
					_id : req.params.hall_id
			}, function(err, todo) {
					if (err)
							res.send(err);

					Hall.find(function(err, todos) {
							if (err)
									res.send(err)
							res.json(todos);
					});
			});
		});

		app.get('/api/halls/:hall_id', function(req, res) {
			// redirect to hall #id view;
			console.log('this is hall view');
		});

    app.get('/api/todos', function(req, res) {

        // use mongoose to get all todos in the database
        Todo.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });



    app.post('/api/todos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
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

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

		app.get('*', function(req, res) {
        res.sendfile('./app/index.html');
    });
/*
    app.get('*', function (req, res, next) {
        res.render('index');
    });

		*/
};
