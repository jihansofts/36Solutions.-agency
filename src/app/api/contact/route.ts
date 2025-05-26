import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, email, phone, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "playergtax6@gmail.com", // Use environment variables
        pass: "yxzzkyttsckzxxjm",
      },
    });

    await transporter.sendMail({
      from: `"36wbsolutions Form Client" <${email}>`,
      to: "36websolutions@gmail.com",
      html: `
        <h2>Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
