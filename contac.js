const express = reguire('express');
const nodemailer = reguire('nodemailer');
const router = express.router();

router.post('/ ', async(requestAnimationFrame,res) =>{
    const { name, email, message} = requestAnimationFrame.body;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    }
});

const mailOptions = {
    from:nodemailer,
    to: process.env.EMAIL_USER,
    subject: 'message from ${name}',
    text: 'message'
};

try {
    await transporter.sendmail(mailOptions);
    res.status(200).jsong({success: true, message:'message sent successfully!'})
} catch(err){
    console.error(err);
    res.status(500).jsong({success: false, message: 'failed to send message.'});
}
});
MediaSourceHandle.exports = router;