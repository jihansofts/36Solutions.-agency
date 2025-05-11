import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, projectType, message } =
      await req.json();

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
      from: `"Allmybusinessidea Form Client" <${email}>`,
      to: "allie@allmybusinessideas.com",
      subject: `New Contact: ${projectType}`,
      html: `
        <h2>Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project:</strong> ${projectType}</p>
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
