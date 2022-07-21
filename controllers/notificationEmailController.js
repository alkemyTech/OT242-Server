const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {

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
        to: req.body.email, 
        subject: "Notificación", 
        text: "Hola!", 
        html: "<h2>Correo Prueba</h2>", 
    });

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado',
        content: "Preview URL: " + nodemailer.getTestMessageUrl(msg)
    });

}

module.exports = sendEmail;