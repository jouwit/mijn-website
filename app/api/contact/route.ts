import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { naam, email, onderwerp, bericht } = await request.json();

    if (!naam || !email || !onderwerp || !bericht) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    // 1. E-mail naar Jouw IT
    await resend.emails.send({
      from: "Jouw IT Contact <info@jouwit.nl>",
      to: "info@jouwit.nl", // <-- Vervang door jouw ontvangstadres
      replyTo: email,
      subject: `Nieuw bericht via jouwit.nl: ${onderwerp}`,
      text: `Naam: ${naam}\nE-mail: ${email}\nOnderwerp: ${onderwerp}\n\nBericht:\n${bericht}`,
    });

    // 2. Automatische bevestigingsmail naar de afzender
    await resend.emails.send({
      from: "Jouw IT <info@jouwit.nl>",
      to: email,
      replyTo: "info@jouwit.nl", // <-- Vervang door jouw ontvangstadres
      subject: `Bevestiging van je bericht: ${onderwerp}`,
      text: `Beste ${naam},\n\nBedankt voor je bericht aan Jouw IT! We hebben je aanvraag in goede orde ontvangen en nemen zo snel mogelijk contact met je op.\n\nOnze bereikbaarheid:\n- Maandag t/m vrijdag: 18:00 – 00:00 uur\n- Zaterdag & zondag: 08:00 – 18:00 uur\n\nMet vriendelijke groet,\nJouw IT\nhttps://jouwit.nl`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px;">
          <h2 style="color: #1d4ed8;">Bedankt voor je bericht, ${naam}!</h2>
          <p>We hebben je aanvraag over <strong>${onderwerp}</strong> in goede orde ontvangen en nemen zo snel mogelijk contact met je op.</p>
          <div style="background-color: #f8fafc; border-left: 4px solid #1d4ed8; padding: 12px 16px; margin: 20px 0;">
            <p style="margin: 0 0 6px 0; font-weight: bold;">Onze bereikbaarheid:</p>
            <p style="margin: 0;">Maandag t/m vrijdag: 18:00 – 00:00 uur</p>
            <p style="margin: 0;">Zaterdag &amp; zondag: 08:00 – 18:00 uur</p>
          </div>
          <p>Met vriendelijke groet,<br><strong>Jouw IT</strong><br><a href="https://jouwit.nl" style="color: #1d4ed8;">jouwit.nl</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend fout:", error);
    return NextResponse.json(
      { error: "Verzenden mislukt." },
      { status: 500 }
    );
  }
}