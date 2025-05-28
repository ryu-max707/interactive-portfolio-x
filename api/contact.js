import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.MAIL_USER,  // ton email
      pass: process.env.MAIL_PASS,  // mot de passe ou app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire Site" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO, // destinataire (toi)
      subject: `Message de ${name}`,
      html: `
        <h3>Nouveau message reçu</h3>
        <p><b>Nom :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Message :</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l’envoi du mail.' });
  }
}
