import { NextResponse } from "next/server";
import ContactFormEmail from "@/emails/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESENDKEY);

export async function POST(request) {
  try {
    const data = await request.json(); // Get the form data from the request body
    console.log(data);
    // Call the API to send the email
    const response = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: "diego.thonycb@gmail.com",
      subject: "Message From IMS (TEST)",
      reply_to: data.email,
      react: ContactFormEmail({ ...data }), // Pass the captured form data as props to ContactFormEmail
    });

    // Handle the response from the API call as needed
    console.log("API response:", response);

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email." });
  }
}
