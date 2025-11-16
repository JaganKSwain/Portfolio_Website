# SMTP Configuration Guide for NIST Email

## How to Find Your SMTP Settings

### Method 1: Check Your Email Client Settings
If you have your NIST email configured in Outlook, Thunderbird, or another email client:

1. Open your email client
2. Go to Account Settings or Preferences
3. Find the SMTP/Outgoing Mail Server settings
4. Note the Server/Host and Port number

### Method 2: Check Email Provider
1. If your NIST email uses **Gmail/Google Workspace**:
   - SMTP_HOST: `smtp.gmail.com`
   - SMTP_PORT: `587`
   - **Note:** You'll need to generate an App Password (not your regular password)

2. If your NIST email uses **Microsoft 365/Outlook**:
   - SMTP_HOST: `smtp-mail.outlook.com` or `smtp.office365.com`
   - SMTP_PORT: `587`

3. If it's a **custom mail server**:
   - SMTP_HOST: Usually `smtp.nist.edu` or `mail.nist.edu`
   - SMTP_PORT: `587` (or `465` for SSL)

### Method 3: Contact IT Department
Contact NIST University IT support for official SMTP settings.

## Common SMTP Ports

- **Port 587**: STARTTLS (Recommended - Use `secure: false`)
- **Port 465**: SSL/TLS (Use `secure: true`)
- **Port 25**: Usually blocked by ISPs

## For Gmail Users (If NIST uses Google Workspace)

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate an app password for "Mail"
5. Use that app password in `SMTP_PASS`

## Testing Your Configuration

After setting up `.env.local`, you can test the connection by:

1. Starting your dev server: `npm run dev`
2. Going to the Contact page
3. Sending a test email
4. Check the server console for any errors

## Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Keep your password secure
- Consider using environment-specific configurations for production

