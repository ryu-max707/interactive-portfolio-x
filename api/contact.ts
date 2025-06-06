import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message, subject = "Nouveau message de contact", phone = "Non fourni" } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} - Formulaire Site <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `${subject} - de ${name}`,
      text: `
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Message: ${message}
      `,
      html: `
        <h3>Nouveau message reçu</h3>
        <p><b>Nom :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Téléphone :</b> ${phone}</p>
        <p><b>Sujet :</b> ${subject}</p>
        <p><b>Message :</b><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi email :", error);
    res.status(500).json({ success: false, error: 'Erreur lors de l'envoi du mail.' });
  }
}
