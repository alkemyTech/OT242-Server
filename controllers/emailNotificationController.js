const nodemailer = require('nodemailer');

const sendEmail = async () => {

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'vladimir66@ethereal.email',
            pass: '5Xwc3u1pVCCSe1e1gN'
        }
    });

    // send mail with defined transport object
    let msg = await transporter.sendMail({
        from: '"Somos Más ONG" <somosfundacionmas@gmail.com>', 
        to: 'mcamila.mejia@outlook.com', 
        subject: "Notificación", 
        text: "Hola!", 
        html: "<h2>Correo Prueba</h2>", 
    });

    console.log("Message sent: %s", msg.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(msg));

}

module.exports = sendEmail;