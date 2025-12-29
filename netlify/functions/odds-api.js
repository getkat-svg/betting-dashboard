// Netlify serverless function to proxy The Odds API requests
// This keeps the API key secure on the server side

exports.handler = async (event) => {
  const API_KEY = process.env.ODDS_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' })
    };
  }

  // Get sport and markets from query params
  const params = event.queryStringParameters || {};
  const sport = params.sport || 'basketball_nba';
  const markets = params.markets || 'h2h';

  const bookmakers = 'pinnacle,circa,fanduel,draftkings,betmgm,caesars,pointsbetus,betrivers,bovada';

  const url = `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${API_KEY}&regions=us,us2&markets=${markets}&oddsFormat=american&bookmakers=${bookmakers}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Get remaining requests from header
    const remaining = response.headers.get('x-requests-remaining');

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: data.message || 'API error',
          status: response.status
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-Requests-Remaining': remaining || 'unknown'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
