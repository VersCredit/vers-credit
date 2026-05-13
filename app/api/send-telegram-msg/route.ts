import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, contactNo, message } = body;

    if (!firstName || !lastName || !contactNo || !email) {
      return NextResponse.json(
        { error: "Required fields are not given!" },
        { status: 400 },
      );
    }

    const text = `
📩 New Contact Form Submission from VersCredit

👤 Name: ${firstName + " " + lastName}
📧 Email: ${email}
📞 Contact No: ${contactNo}
💬 Message:
${message ?? "N/A"}
`;

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramRes = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }),
    });

    const telegramData = await telegramRes.json();

    if (!telegramData.ok) {
      throw new Error("Telegram API failed");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
