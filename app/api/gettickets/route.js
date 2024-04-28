import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // tickets
  const prices = await stripe.prices.list({
    expand: ['data.product'],
    lookup_keys: ['ticket', 'donation'],
  });

  return NextResponse.json(prices.data);
}
