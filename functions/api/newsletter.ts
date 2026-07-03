export async function onRequestPost({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString().trim();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('[newsletter] new subscriber:', email, 'at', new Date().toISOString());

    return new Response(null, {
      status: 303,
      headers: { Location: '/thanks-for-subscribing' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe', details: String(err) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function onRequestGet() {
  return new Response('Method Not Allowed', { status: 405 });
}
---
