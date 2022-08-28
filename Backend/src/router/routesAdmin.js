module.exports = function (app, db) {
    // create search query
    const getStudentsQuery = data => {
        if (!data.rows) data.rows = 20
        let usnr = /1[a-zA-Z]+\d\d[a-zA-Z]+\d\d\d/i
        let emailr = /\S+@\S+\.\S+/i
        let q = {}
        if (data.id) {
            if (data.id.usn) {
                if (data.id.usn.length == 10) {
                    if (usnr.test(data.id.usn)) {
                        q.usn = data.id.usn
                        return { status: "success", param: q }
                    }
                    else return { status: "error", message: "Bad USN id" }
                } else if (data.id.usn && usnr.test(data.id.range.from) && usnr.test(data.id.range.to)) {
                    q.usn = { $gt: data.id.range.from, $lt: data.id.range.to }
                    return {
                        status: "success",
                        param: q
                    }
                } else return { status: "error", message: "Bad USN range from" }
            } else if (data.id.email) {
                q.email = data.id.email
                if (emailr.test(data.id.email)) return { status: "success", param: q }
                else return { status: "error", message: "Bad email id" }
            } else if (data.id.phone) {
                q.phone = data.id.phone
                if (data.id.phone.length > 9) return { status: "success", param: q }
            } else return { status: "error", message: "Bad ids" }
        } else if (data.keywords) {
            if (data.keywords.name) {
                q.first_name = new RegExp('.*' + data.keywords.name + '.*')
                q.last_name = new RegExp('.*' + data.keywords.name + '.*')
            }
            if (data.keywords.dob) q.dob = new RegExp('.*' + data.keywords.dob + '.*')
            if (data.keywords.branch) q.branch = new RegExp('.*' + data.keywords.branch + '.*')
            if (data.keywords.gender) q.gender = new RegExp('.*' + data.keywords.gender + '.*')
            return {
                status: "success",
                param: q,
            }
        } else {
            return { status: 'error', message: 'not supported yet' }

        }
    }
}