interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface SendEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

class EmailService {
  private transporter: any;
  private fromEmail: string;
  private isServerSide: boolean;

  constructor() {
    this.isServerSide = typeof window === 'undefined';

    if (!this.isServerSide) {
      console.warn('EmailService: Running in browser environment. Email functionality is disabled.');
      return;
    }

    const config: EmailConfig = {
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
      },
    };

    this.fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || '';

    // Dynamic import for server-side only
    if (this.isServerSide) {
      import('nodemailer').then(({ default: nodemailer }) => {
        this.transporter = nodemailer.createTransport(config);
      }).catch(err => {
        console.error('Failed to load nodemailer:', err);
      });
    }
  }

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    if (!this.isServerSide) {
      console.warn('EmailService: Cannot send email in browser environment');
      return false;
    }

    if (!this.transporter) {
      console.error('EmailService: Transporter not initialized');
      return false;
    }

    try {
      const mailOptions = {
        from: this.fromEmail,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async sendContactEmail(name: string, email: string, message: string): Promise<boolean> {
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}
    `;

    return await this.sendEmail({
      to: 'aphisityns170960@gmail.com',
      subject: `Contact Form: Message from ${name}`,
      text,
      html,
    });
  }

  async verifyConnection(): Promise<boolean> {
    if (!this.isServerSide) {
      console.warn('EmailService: Cannot verify connection in browser environment');
      return false;
    }

    if (!this.transporter) {
      console.error('EmailService: Transporter not initialized');
      return false;
    }

    try {
      await this.transporter.verify();
      console.log('Email service connection verified');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}

export default new EmailService();
