import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement du fichier .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Permettre les requêtes cross-origin (depuis votre frontend Vite)
app.use(express.json()); // Pour parser le corps des requêtes JSON

// Votre handler existant, adapté pour être une route Express
async function emailHandler(req, res) {
  // La vérification de la méthode POST est gérée par app.post(), 
  // mais on peut la laisser si ce handler est réutilisé ailleurs.
  if (req.method !== 'POST') { 
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, message, subject = "Nouveau message de contact", phone = "Non fourni" } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // Votre adresse Gmail
      pass: process.env.MAIL_PASS, // Votre mot de passe d'application Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name} - Formulaire Site" <${process.env.MAIL_USER}>`, // L'expéditeur apparaîtra comme votre MAIL_USER
      to: process.env.MAIL_TO,       // L'adresse où vous recevrez les e-mails
      replyTo: email,                 // Permet de répondre directement à l'utilisateur
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
    console.error("Erreur d’envoi email :", error);
    res.status(500).json({ success: false, error: 'Erreur lors de l’envoi du mail.' });
  }
}

// Définir la route pour le formulaire de contact
app.post('/api/contact', emailHandler);

app.listen(PORT, () => {
  console.log(`Serveur de contact démarré sur http://localhost:${PORT}`);
});

