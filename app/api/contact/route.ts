import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "name, email, and message are required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        success: false,
        message: "RESEND_API_KEY or CONTACT_EMAIL_TO is not configured",
      },
      { status: 500 },
    );
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `New message from ${name}`,
      text: message,
    }),
  });

  let data: Record<string, unknown>;
  try {
    data = await resendRes.json();
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false, message: "Unexpected response from form service" },
      { status: 502 },
    );
  }

  if (!resendRes.ok) {
    return NextResponse.json(
      { success: false, ...data },
      { status: resendRes.status },
    );
  }

  return NextResponse.json(
    { success: true, ...data },
    { status: resendRes.status },
  );
}
