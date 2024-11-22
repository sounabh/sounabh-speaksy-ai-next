//pricing card data

export const pricingPlans = [

    {
        name: "Basic Plan",

        description: "Perfect for individuals starting their blogging journey.",

        price: "360₹/month",

        items: [
            "Access to 5 blog post ",
            "Basic SEO tools",
        ],

        paymentLink: "https://buy.stripe.com/test_14kbKS9DW2kvdZ6dQQ",

        pricingId: "price_1QFVCEGwp4u3fMJXmHXR3maT" 
    },


    {
        name: "Pro Plan",

        description: "Ideal for serious bloggers looking to grow their audience.",

        price: "₹999/month",
        items: [
            "Access to Unlimited blog post for a month",
            "5 GB storage for videos",
            "Advanced SEO tools",
        ],

        paymentLink: "https://buy.stripe.com/test_fZe6qy4jC4sDbQY9AB", //stripe payment pages


        pricingId:"price_1QFVCEGwp4u3fMJXGaEj2CIL" 
    }
];



export const ORIGIN_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "http://sounabh-speaksy-ai-next.vercel.app"