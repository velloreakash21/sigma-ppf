import { NextRequest, NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID;
const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';

export async function GET(request: NextRequest) {
  if (!GITHUB_CLIENT_ID) {
    return NextResponse.json(
      { error: 'GitHub OAuth not configured' },
      { status: 500 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const scope = searchParams.get('scope') || 'repo,user';

  // Get the origin for the callback URL
  const origin = request.nextUrl.origin;
  const callbackUrl = `${origin}/api/callback`;

  const authUrl = new URL(GITHUB_AUTHORIZE_URL);
  authUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', callbackUrl);
  authUrl.searchParams.set('scope', scope);
  authUrl.searchParams.set('state', Math.random().toString(36).substring(7));

  return NextResponse.redirect(authUrl.toString());
}
