var LocalStrategy      = require('passport-local').Strategy;
var FacebookStrategy   = require('passport-facebook').Strategy;
//var VKontakteStrategy  = require('passport-vkontakte').Strategy;
var User               = require('../models/user');
var configAuth         = require('./auth');


module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // - Local strategy
    // -- Log in

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'user',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        //console.warn("Calling findOne");//This actually gets executed

        User.findOne({ 'local.email' :  email }, function(err, user) {
            if (err)
                return done(err);

            //console.warn("!user: "+ !user);
            //console.warn(JSON.stringify(user));
            if (!user)
            {
                console.warn("Bad user");
                return done(null, false, {errmsg: 'No user with this username exists. Please, check your email again.'});
            }


            if (!user.validPassword(password))
                return done(null, false, {errmsg: 'Wrong password, please enter your password again.'});

            return done(null, user);
        });
    }));

    // -- Sign up
    passport.use('local-signup', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {

            process.nextTick(function() {

                User.findOne({ 'local.email' :  email }, function(err, user) {

                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, {errmsg: 'That email is already taken.'});
                    } else {

                        var newUser = new User();
                        newUser.local.email    = email;
                        newUser.local.password = newUser.hashPassword(password);
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);

                        });
                    }

                });

            });

        }));

/*
    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL

    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new User();

                    // set all of the facebook information in our user model
                    newUser.facebook.id    = profile.id; // set the users facebook id
                    newUser.facebook.token = token; // we will save the token that facebook provides to the user
                    newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));

    // =========================================================================
    // VK ======================================================================
    // =========================================================================

    passport.use(new VKontakteStrategy({
      clientID        : configAuth.vkAuth.clientID,
      clientSecret    : configAuth.vkAuth.clientSecret,
      callbackURL     : configAuth.vkAuth.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {
        //console.log(accessToken);
        User.findOne({ 'vk.id': profile.id }, function (err, user) {
          if (err)
              return done(err);

          if (user) {
            return done(err, user);
          } else {
            // if there is no user found with that facebook id, create them
            var newUser      = new User();
            newUser.vk.id    = profile.id;
            newUser.vk.token = accessToken;
            newUser.vk.name  = profile.displayName;
            newUser.vk.email = '-';

            // save our user to the database
            newUser.save(function(err) {
                if (err)
                    throw err;

                // if successful, return the new user
                return done(null, newUser);
            });
          }
        });
      }
    ));
*/
};
