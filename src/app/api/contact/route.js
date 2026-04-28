export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send to FormSubmit
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("_subject", `New Project Brief from ${name}`);
    formData.append("_captcha", "false");
    formData.append("_next", `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/`);

    const response = await fetch(
      "https://formsubmit.co/moiztahirtahir009@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("FormSubmit request failed");
    }

    // Send auto-reply email
    await sendAutoReply(email, name);

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

async function sendAutoReply(userEmail, userName) {
  try {
    const formData = new FormData();
    formData.append("from_name", "Abdul Moiz");
    formData.append("to_email", userEmail);
    formData.append("subject", "Thank you for reaching out!");
    formData.append("message", `Hi ${userName},\n\nThank you for reaching out and sharing your project brief. I've received your message and will review it carefully.\n\nI'll get back to you within 24 hours with a practical plan and next steps.\n\nIf you prefer to discuss immediately, feel free to reach out on WhatsApp: +92 323 3450785\n\nLooking forward to building something amazing together!\n\nBest regards,\nAbdul Moiz Tahir\nMERN Stack Developer`);

    await fetch("https://formsubmit.co/ajax/" + userEmail, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.log("Auto-reply failed (non-critical):", error);
  }
}
