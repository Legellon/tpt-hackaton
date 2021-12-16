// email:    hackathontpt
// password: +4y_2NZ_u.e4yh-6

module.exports = {
    send(email, subject, text) {
        const nodemailer = require("nodemailer");
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "hackathontpt@gmail.com",
                pass: "+4y_2NZ_u.e4yh-6"
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: "hackathontpt@gmail.com",
            to: email,
            subject: subject,
            text: text
        };

        transporter.sendMail(mailOptions, function (err, success) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email to " + email +" sent successfully");
            }
        });
    }
}
