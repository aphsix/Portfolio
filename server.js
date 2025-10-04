import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MOCK_EMAIL = process.env.MOCK_EMAIL === 'true';

let transporter;

if (MOCK_EMAIL) {
  // Use ethereal email for testing (fake SMTP)
  console.log('🧪 Using MOCK email mode for testing');
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'any-password'
    }
  });
} else {
  // Use real Gmail configuration
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify email configuration on startup (only for real email)
  transporter.verify(function(error, success) {
    if (error) {
      console.log('❌ Email configuration error:', error.message);
      console.log('Please check your EMAIL_USER and EMAIL_PASS in .env file');
      console.log('For Gmail, you need to use an App Password instead of your regular password');
      console.log('💡 You can set MOCK_EMAIL=true in .env to test without real email');
    } else {
      console.log('✅ Email server is ready to take messages');
    }
  });
}

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // Prepare email content
    const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}
    `;

    // Send email
    const mailOptions = {
      from: MOCK_EMAIL ? 'test@example.com' : `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'aphisityns170960@gmail.com',
      replyTo: email, // อีเมลผู้ส่งจากฟอร์ม
      subject: `Contact Form: Message from ${name}`,
      text,
    };

    if (MOCK_EMAIL) {
      // Mock email sending - just log the email content
      console.log('📧 MOCK EMAIL SENT:');
      console.log('From:', mailOptions.from);
      console.log('To:', mailOptions.to);
      console.log('Subject:', mailOptions.subject);
      console.log('Content:', text);
      console.log('-------------------');
    } else {
      // ส่งอีเมลหาคุณ
      await transporter.sendMail(mailOptions);

      // Auto-reply email
      const autoReplyText = `
ขอบคุณที่ติดต่อเรา

สวัสดีครับคุณ ${name},

เราได้รับข้อความของคุณเรียบร้อยแล้ว และจะตอบกลับโดยเร็วที่สุด

ข้อความที่คุณส่งมา:
${message}

ขอบคุณครับ,
Aphisit
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'เราได้รับข้อความของคุณแล้ว - Thank you for contacting us',
        text: autoReplyText,
      });
    }

    const emailSent = true;

    if (emailSent) {
      res.status(200).json({
        success: true,
        message: 'Email sent successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to send email'
      });
    }
  } catch (error) {
    console.error('Error in contact endpoint:', error);

    let errorMessage = 'Internal server error';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check email configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Failed to connect to email server.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
