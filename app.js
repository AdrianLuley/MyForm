const express = require('express')
const app = express()
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function (req, res) {
    var name = req.body.user_name;
    var message = req.body.user_message;
    var email = req.body.user_mail;
    var number = req.body.user_tel;
    var url = req.body.user_url;
    var contactMethod = req.body.user_contact;
    var xbox = req.body.system;
    var playstation = req.body.system;
    var nintendo = req.body.system;
    var msg = req.body.user_message;
    var myDate = req.body.myDate;

    console.log("Name: " + name);
    console.log("Message: " + message);
    console.log("E-Mail: " + email);
    console.log("Phone Number:" + number);
    console.log("Your Homepage URL:" + url);
    console.log("Message:" + msg);
    console.log("Preferred Contact Method:" + contactMethod);
    console.log("Xbox" + xbox);
    console.log("Playstation" + playstation);
    console.log("Nintendo" + nintendo);
    console.log("When are you available for futher questions?" + myDate);

    res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);