// Netlify function to handle email notifications
// To enable actual email sending, add RESEND_API_KEY or SENDGRID_API_KEY to environment variables

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { email, frequency, bets } = JSON.parse(event.body);

    if (!email || !bets || bets.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Check for email service API keys
    const resendKey = process.env.RESEND_API_KEY;
    const sendgridKey = process.env.SENDGRID_API_KEY;

    if (!resendKey && !sendgridKey) {
      // No email service configured - log and return success
      // In production, configure RESEND_API_KEY or SENDGRID_API_KEY
      console.log(`Email notification requested for ${email}:`, bets.length, 'bets');
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Email notification logged (no email service configured)',
          bets: bets.length
        })
      };
    }

    // Format email content
    const betsList = bets.map(bet =>
      `• ${bet.sport}: ${bet.event}\n  ${bet.selection} at ${bet.softBook} | +${bet.ev.toFixed(1)}% EV`
    ).join('\n\n');

    const subject = bets.length === 1
      ? `+${bets[0].ev.toFixed(1)}% EV Alert: ${bets[0].sport}`
      : `${bets.length} New Value Bets Found`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f59e0b;">Edge Alert</h2>
        <p style="color: #64748b;">New +EV betting opportunities found:</p>
        ${bets.map(bet => `
          <div style="background: #1a1f2a; border-radius: 8px; padding: 16px; margin: 12px 0; border-left: 3px solid #f59e0b;">
            <div style="color: #f59e0b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">${bet.sport}</div>
            <div style="color: #f8fafc; font-weight: 600; margin: 8px 0;">${bet.event}</div>
            <div style="color: #94a3b8;">${bet.selection}</div>
            <div style="margin-top: 12px; display: flex; gap: 20px;">
              <span style="color: #22c55e; font-weight: 700;">+${bet.ev.toFixed(1)}% EV</span>
              <span style="color: #64748b;">at ${bet.softBook}</span>
            </div>
          </div>
        `).join('')}
        <p style="color: #64748b; font-size: 12px; margin-top: 24px;">
          Lines move fast - act quickly for best value.
        </p>
      </div>
    `;

    // Send via Resend (preferred - simpler API)
    if (resendKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Edge Alerts <alerts@yourdomain.com>',
          to: email,
          subject: subject,
          html: htmlContent
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email via Resend');
      }
    }

    // Or send via SendGrid
    if (sendgridKey && !resendKey) {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sendgridKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email }] }],
          from: { email: 'alerts@yourdomain.com', name: 'Edge Alerts' },
          subject: subject,
          content: [{ type: 'text/html', value: htmlContent }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email via SendGrid');
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };

  } catch (error) {
    console.error('Email error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
