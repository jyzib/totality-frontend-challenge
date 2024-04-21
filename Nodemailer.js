import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"jazibzaidi02@gmail.com",
        pass:process.env.EMAILPASSWORD
    }

})


