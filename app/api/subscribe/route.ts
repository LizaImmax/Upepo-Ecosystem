export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service provider (Mailchimp, ConvertKit, etc.)
    // Example: await mailchimp.lists.addListMember(LIST_ID, { email_address: email });
    
    // For now, just log it (replace with actual API integration)
    console.log('New subscriber:', email);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return Response.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
