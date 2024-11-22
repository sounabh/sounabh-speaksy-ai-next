import handlecheckoutSession from "@/lib/payment-helper";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";




// Initialize Stripe with API key, throw error if missing

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); //initializing stripe



//basically this function will call bt stripe webhook 




/* undertanding webhook so when two system communicate each other when a event is occur is is called webhook
its diffrent from poling(regular cheacking and triggering event) and open communication (tied to server everytime)
instead of requiring client apps ton check regular interval 
webhook enables the server to notify especially when a new event is occured  on client side to update the information rest it helps to reduce load and tied resoursing

In a proper webhook implementation, the client app would provide its webhook URL to the server, and the server would push updates to the client as soon as they become available. The client app should not actively check the server at regular intervals

*/













//fetching server updates of the events whixh occuring from the client 
export async function POST(request: NextRequest) {



    let payload = await request.text(); //payload our subscription information
    // console.log("payload",payload);

    // Get Stripe signature from headers
    const sig = request.headers.get("stripe-signature");
    //console.log("sig",sig);

    if (!sig) {


        // console.log("Missing Stripe signature. Make sure you're using Stripe CLI or sending requests from Stripe");
        //console.log("To test locally, use: stripe listen --forward-to localhost:3000/api/webhooks");


        return NextResponse.json({
            status: "failed",
            error: "Missing Stripe signature in headers. Are you using Stripe CLI?"
        }, { status: 400 });
    }

    // Verify webhook secret exists


    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        return NextResponse.json({
            status: "failed",
            error: "Missing Stripe webhook secret"
        }, { status: 400 });
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);

        switch (event.type) {
            case 'payment_intent.succeeded':
                const paymentIntentSucceeded = event.data.object;
                // console.log('Payment intent succeeded:', paymentIntentSucceeded);
                break;



            //when payment will complete we check the server via webhook thats whats the information and retrive it
            case 'checkout.session.completed': {
                const session = await stripe.checkout.sessions.retrieve(
                    event.data.object.id,
                    {
                        expand: ['line_items']
                    }
                );


                //sending the customer / session information to somehere
                await handlecheckoutSession({ session, stripe });
                //  console.log('Checkout completed:', {session});
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = await stripe.subscriptions.retrieve(
                    event.data.object.id,
                    {
                        expand: ['line_items']
                    }
                );
                // console.log('Subscription deleted:', {subscription});
                break;
            }

            default:
            //  console.log(`Unhandled event type: ${event.type}`);
        }



    } catch (error) {
        console.error('Stripe webhook error:', error);
        return NextResponse.json({
            status: "failed",
            error: {
                message: error instanceof Error ? error.message : "Unknown error occurred",
                type: error instanceof Stripe.errors.StripeError ? error.type : "UnknownError"
            }
        }, { status: 400 });
    }



    //if everything works fine the send back 200
    return NextResponse.json({
        status: "success"
    }, { status: 200 });

} 