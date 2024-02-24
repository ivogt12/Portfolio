const Email = require("../../models/email");

module.exports = {
    sendEmail
}

async function sendEmail(req, res) {
    console.log(req.body.newEmail)
    const email = new Email(req.body.newEmail);
    await email.save();
    res.json(email);
}