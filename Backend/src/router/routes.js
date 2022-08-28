const multer = require('multer');
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
    // =========================================================================================
    // function to upload the files
    // cb means call back
    const upload = multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                // console.log(file+" ");
                // console.log(file.fieldname+" ");
                // console.log(file.size);
                // console.log(file.filename);
                cb(null, "uploads")
            },
            filename: function (req, file, cb) {
                // console.log(file.originalname);
                let name = file.originalname;
                if (name.length) {
                    // req.json({ file: req.file });
                    // console.log(req.params);
                    // console.log(name);
                    // console.log(req.file);
                    // console.log(name.length);
                    // console.log(req.body);
                }
                cb(null, file.fieldname + "_" + Date.now() + ".pdf")
            }
        })
    }).single("file_upload",);
    app.post("/upload", upload, (req, res) => {
        // res.json({ file: req.file });
        let k = req.body;

        let temp = req.file;
        // console.log(temp);
        // console.log(k);
        // console.log(temp.fieldname);
        let page;
        if(temp.fieldname)
            page = req.file.originalname;
        let smooth=1;
        if(!page)
            smooth=0;

        // console.log(page.length)
        let size=0;
        if(page.length && smooth)
            size=1;
        // console.log(k.tenderName);
        // console.log(page);
        if (size != 0 &&
            k.tenderName &&
            k.startDate && 
            k.email &&
            k.endDate) {
            let obj = {
                email: k.email,
                profile: {
                    file:req.file,
                    tenderName: k.tenderName,
                    startDate: k.startDate,
                    endDate: k.endDate,
                },
            };
            db.collection("files").insertOne(obj, (error, results) => {
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
                        message: "File Uploaded  !",
                        lastUpdated: req.session.lastUpdated,
                        isLatest: true,
                        isLogged: true,
                        profile: obj.profile,
                    });
                }
            });
        }
        else {
            res.json({
                status: "error",
                message: "Empty or invalid file",
                isLogged: false,
            });
        }

        // res.send("File Upload")
    });
    // =======================================================================*******************************================================
    // =======================================================================*******************************================================
    // get all vendors
    app.get("/all_vendors", (req, res) => {
        try {
            let k = req.body;
            console.log(k);
            db.collection("members")
                .find()
                .toArray((error, results) => {
                    if (error) {
                        res.json({
                            status: "error",
                            message: "unable to fetch data with requested params",
                            isLogged: true,
                        });
                        throw error;
                    }
                    res.json(results);
                });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });
    // =======================================================================*******************************================================
    // =======================================================================*******************************================================
    // combined data of files and members
    app.get("/all_data", (req, res) => {
        console.log("insides");
        db.collection("members")
            .aggregate([
                {
                    $lookup: {
                        from: "files",
                        localField: "email",
                        foreignField: "email",
                        as: "comp",
                    },
                    
                },
                {
                    $lookup: {
                        from: "members",
                        localField: "email",
                        foreignField: "email",
                        as: "stud",
                    },
                },
            ])
            .toArray((error, results) => {
                if (error) {
                    res.json({ error });
                }
                res.json(results);
            });
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
                                isVerified: k.verified,
                            },
                            admin: k.admin,
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