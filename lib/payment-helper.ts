import Stripe from "stripe";
import getDbConnect from "./db";



//calling from upload-form
export default async function handlecheckoutSession({ session, stripe }: { session: Stripe.Checkout.Session, stripe: Stripe }) {




    const customerId = session.customer as string
    console.log(customerId);
    
    const customer = await stripe.customers.retrieve(customerId)

    
   
    
    const priceId =  session.line_items?.data[0].price?.id
    console.log("check",priceId);
    
    const sql = await getDbConnect()

//console.log("c",customer.email);
//console.log(priceId);
//console.log(session);



//ensuring that the customer we have a email and a purchase id 

    if ('email' in customer && priceId) {
        //create
        await createUpdateUser(customer, customerId, sql)

        //update subs
        await UpdateUserSubscription(sql, priceId, customer.email as string)

        //insert payment
        await insertPayment(sql, session, customer.email as string, priceId)
    }




}



async function createUpdateUser(customer: Stripe.Customer, customerId: string, sql: any) {

    try {



//a user where email have customer.email basically email from which they purchased and quering top database
        const user = await sql`SELECT * FROM users where email = ${customer.email}`


        //if user doesnt exist then creating the user 
        if (user.length === 0) {


            await sql`INSERT INTO users(email,full_name,customer_id) VALUES (${customer.email},${customer.name}, ${customerId})`



        }

    } catch (error) {
        console.log(error);

    }

}



async function UpdateUserSubscription(sql: any, priceId: string, email: string) {



    try {





//setting that customer have subscribed succesfullt because we have price id
        await sql`UPDATE users set price_id = ${priceId},status = 'active' WHERE email = ${email}`






    } catch (error) {
        console.log(error);

    }

}





async function insertPayment(sql: any, session: Stripe.Checkout.Session, userEmail: string, priceId: string) {


    try {

        //insert into payments table 
        await sql`INSERT INTO payments(amount, status, stripe_payment_id, price_id, user_email) 
                 VALUES (${session.amount_total}, ${session.status}, ${session.id}, ${priceId}, ${userEmail})`


                 
    } catch (error) {
        console.log(error);
    }
}