module.exports = function (app, db) {
    // dummy route
    // =================admin Api===================
    app.get("/admin", (req, res) => {
        try {
            db.collection("admin")
                .find({})
                .toArray((err, res) => console.log(res, err));
            res.send("Admin part");
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });

    
    // =======================================================================*******************************================================
    // post route for register (expects json data)
    // to register all members
    app.post("/register", (req, res) => {
        let k = req.body;
        console.log(req.body);
        // Check if already logged in ?
        if (req.session && req.session.userid) {
            res.json({
                status: "warn",
                message: "Session already exists !",
                isLogged: true,
                lastUpdated: req.session.lastUpdated,
                isLatest: false,
                // keys: req.session.keys,
                profile: req.session.profile,
            });
        }
        // check if any value is not null
        else if (
            k.name &&
            k.organization &&
            k.phoneno &&
            k.verified &&
            k.email &&
            k.password &&
            !k.admin

        ) {
            // check if record already exists...
            db.collection("members").findOne(
                { email: k.email },
                { projection: { _id: 1, email: 1 } },
                (error, result) => {
                    if (result && result._id) {
                        res.json({
                            status: "error",
                            message: "User already exists !",
                            isLogged: false,
                        });
                    }
                    // usn doesn't exists, create one
                    else {
                        let obj = {
                            email: k.email,
                            profile: {
                                name: k.name,
                                organization: k.organization,
                                phoneno: k.phoneno,
                                email: k.email,
                                isVerified:k.verified,
                            },
                            admin:k.admin,
                            password: k.password,
                        };
                        db.collection("members").insertOne(obj, (error, results) => {
                            if (error) {
                                res.json({
                                    status: "error",
                                    message: error,
                                    isLogged: false,
                                });
                                throw error;
                            }
                            // Records inserted, auto log in
                            else {
                                // log it in
                                req.session.userid = k.email;
                                req.session.profile = obj.profile;
                                req.session.lastUpdated = new Date();
                                res.json({
                                    status: "success",
                                    message: "Account created !",
                                    lastUpdated: req.session.lastUpdated,
                                    isLatest: true,
                                    isLogged: true,
                                    profile: obj.profile,
                                });
                            }
                        });
                    }
                }
            );
        } else {
            // some fields are null
            res.json({
                status: "error",
                message: "Empty or invalid data",
                isLogged: false,
            });
        }
    });
};