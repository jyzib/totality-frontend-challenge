
import {transporter} from '../../../../Nodemailer'
import { NextResponse } from 'next/server'
import { currentUser } from "@clerk/nextjs";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {

  const user =await currentUser()
 
  const slug = params.id // 'a', 'b', or 'c'

 const moreOption = {
  from: "Amazon.com",
  to: user?.emailAddresses?.[0]?.emailAddress,
  subject: "Booking Confirmation Homely Hub",
  html: `
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
            }
            .header {
              background-color: #007bff;
              color: #fff;
              padding: 20px;
              text-align: center;
                border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
              text-align: center;
            }
            .otp {
              font-size: 24px;
                font-weight: bold;
                color: #007bff;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
                color: #666666;
            }
            .footer-content {
                background-color: #f7f7f7;
                padding: 10px;
                border-radius: 0 0 8px 8px;
            }
            .footer-content p {
                margin: 5px 0;
            }
            .bold{
                  font-size: 19px;
    font-weight: bolder;
    color: #25013c;
            }
            </style>
    </head>
    <body>
    <div class="container">
    <div class="header">
        <h2>Booking Confirmation</h2>
    </div>
    <div class="content">
        <p class="bold">Hello, ${user?.firstName}</p>
        <p>Your booking  been confirmed!</p>
        <p>Details:</p>
        <ul>
            <li>Date: ${new Date()}</li>
            <li>Amount:₹ ${slug}</li>
          
        </ul>
      
    </div>
    <div class="footer">
        <div class="footer-content">
            <p>Thank you for choosing us,</p>
            <p>Jaizb Zaidi { Holemy hub } </p>
        </div>
    </div>
</div>

    </body>
    </html>
  `
};
    try {
        await transporter.sendMail(moreOption)
    } catch (error) {
        console.log(error)
    }
   return NextResponse.json({ok:'send'})
  }

 


  