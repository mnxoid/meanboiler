var Todo        = require('../models/todo');
var Hall        = require('../models/halls');
var User        = require('../models/user');
var passport    = require('passport');
var jwt         = require('jsonwebtoken');
var tokenSecret = 'L0n9_l1v3_1337_h4x0rz';

//--------------------------------------------------
// Array.prototype.unique =
//   function() {
//     var a = [];
//     var l = this.length;
//     for(var i=0; i<l; i++) {
//       for(var j=i+1; j<l; j++) {
//         // If this[i] is found later in the array
//         if (this[i]["name"] == this[j]["name"])
//           j = ++i;
//       }
//       a.push(this[i]);
//     }
//     return a;
//   };
//--------------------------------------------------


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
			country  : req.body.country,
            city     : req.body.city,
			capacity : req.body.capacity,
			price    : req.body.price,
            pic      : req.body.pic
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
		// Hall.remove({
  //           _id : req.params.hall_id
		// }, function(err, todo) {
  //           if (err)
  //               res.send(err);

  //           Hall.find(function(err, todos) {
  //               if (err)
  //                   res.send(err);
  //               res.json(todos);
  //           });
		// });
	});

	app.get('/api/halls/view/:hall_id', function(req, res) {
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
            var results = [];
            for (var h in hall) results.push({name: hall[h]["name"]});
            res.json(results);
        });
    });

    app.get('/api/halls/searchall/:q', function(req, res) {
        Hall.find({
            $or:[
            {
                name: new RegExp(req.params.q, "i")
            },
            {
                city: new RegExp(req.params.q, "i")
            },
            {
                country: new RegExp(req.params.q, "i")
            }
            ]
        }, function(err, hall){
            if (err)
                res.send(err);
            results = [];
            results.unique = function() {
                var a = [];
                var l = this.length;
                for(var i=0; i<l; i++) {
                  for(var j=i+1; j<l; j++) {
                    // If this[i] is found later in the array
                    if (this[i]["name"] == this[j]["name"])
                      j = ++i;
                  }
                  a.push(this[i]);
                }
                return a;
            };
            keys = ["name","city","country"];
            for (h in hall) {
                for (property in hall[h]) {
                    if ((keys.indexOf(property)>=0) && (new RegExp(req.params.q, "i")).test(hall[h][property]))
                        results.push({
                            name: hall[h][property]
                        });
                }
            }
            res.json(
                results.unique()
            );
        });
    });

    app.get('/api/halls/cities/:q', function(req, res) {
        Hall.find({
            country: new RegExp(req.params.q, "i")
        }, function(err, hall){
            if (err)
                res.send(err);
            results = [];
            for (h in hall){
                if (results.indexOf(hall[h]["city"])==-1) {
                    results.push(hall[h]["city"]);
                }
            }
            res.json(results);
        });
    });

    app.get('/api/halls/cities', function(req, res) {
        Hall.find(function(err, halls){
            if (err)
                res.send(err);
            results = [];
            for (h in halls){
                if (results.indexOf(halls[h]["city"])==-1) {
                    results.push(halls[h]["city"]);
                }
            }
            res.json(results);
        });
    });

    app.get('/api/halls/countries/:q', function(req, res) {
        Hall.find({
            city: new RegExp(req.params.q, "i")
        }, function(err, hall){
            if (err)
                res.send(err);
            results = [];
            for (h in hall){
                if (results.indexOf(hall[h]["country"])==-1) {
                    results.push(hall[h]["country"]);
                }
            }
            res.json(results);
        });
    });

    app.get('/api/halls/countries', function(req, res) {
        Hall.find(function(err, halls){
            if (err)
                res.send(err);
            results = [];
            for (h in halls){
                if (results.indexOf(halls[h]["country"])==-1) {
                    results.push(halls[h]["country"]);
                }
            }
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
