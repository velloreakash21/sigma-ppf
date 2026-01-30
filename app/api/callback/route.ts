import { NextRequest, NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET;
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return new NextResponse(renderMessage('error', 'No code provided'), {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    return new NextResponse(renderMessage('error', 'OAuth not configured'), {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new NextResponse(
        renderMessage('error', tokenData.error_description || tokenData.error),
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    const { access_token, token_type } = tokenData;

    // Send the token back to the CMS
    return new NextResponse(
      renderMessage('success', { token: access_token, provider: 'github' }),
      { headers: { 'Content-Type': 'text/html' } }
    );
  } catch (error) {
    console.error('OAuth error:', error);
    return new NextResponse(renderMessage('error', 'Authentication failed'), {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

function renderMessage(status: 'success' | 'error', content: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authentication ${status === 'success' ? 'Successful' : 'Failed'}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #0a0a0a;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
    }
    .message {
      text-align: center;
      padding: 40px;
      background: #1a1a1a;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .success { color: #4ade80; }
    .error { color: #f87171; }
  </style>
</head>
<body>
  <div class="message">
    <h1 class="${status}">${status === 'success' ? 'Authentication Successful!' : 'Authentication Failed'}</h1>
    <p>${status === 'success' ? 'You can close this window.' : content}</p>
  </div>
  <script>
    (function() {
      const status = "${status}";
      const content = ${JSON.stringify(content)};

      // Send message to parent window (Decap CMS)
      if (window.opener) {
        window.opener.postMessage(
          'authorization:github:' + status + ':' + JSON.stringify(content),
          window.location.origin
        );
        setTimeout(() => window.close(), 1000);
      }
    })();
  </script>
</body>
</html>
  `;
}
