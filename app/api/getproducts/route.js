import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // t-shirts
  const prices = await stripe.prices.list({
    expand: ['data.product'],
    lookup_keys: ['shirt2024', 'shirt2022'],
  });

  return NextResponse.json(prices.data.reverse());
}
