import { ArrowRight, CheckIcon } from 'lucide-react';
import React from 'react'
import { Button } from '../button';
import Link from 'next/link';
import { pricingPlans } from '@/lib/constants';

function Pricing() {

    //pricing page

    return (
        <section className='relative overflow-hidden py-16 lg:py-24' id='pricing'>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className='text-center mb-16'>

                    <h2 className='font-bold text-xl uppercase text-purple-600'>Pricing</h2>

                    <p className='mt-4 text-xl text-gray-600'>Choose the perfect plan for your needs</p>


                </div>

                <div className='grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto'>

                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}

                            //giving dynamic classes for diffrent cards on based of index 

                            className={`relative rounded-2xl p-8 ${index === 1
                                ? 'bg-purple-50 border-2 border-purple-500 shadow-xl'
                                : 'bg-white border border-gray-200'
                                }`}
                        >

                            <div className='flex flex-col h-full'>

                                <div className='mb-8'>

                                    <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                                    <p className='text-gray-600'>{plan.description}</p>


                                </div>

                                <div className='mb-8'>

                                    <div className='flex items-end'>

                                        <span className='text-4xl font-bold'>

                                            {index === 0 ? '360₹' : '999₹'}

                                        </span>

                                        <span className='text-gray-600 ml-2'>/month</span>
                                    </div>
                                </div>

                                <ul className='space-y-4 mb-8 flex-grow'>

                                    {plan.items.map((item, itemIndex) => (

                                        <li key={itemIndex} className='flex items-center'>
                                            <CheckIcon size={20} className='text-purple-600 mr-2' />
                                            <span>{item}</span>
                                        </li>

                                    ))}
                                </ul>

                                {/* transfering to stripe page */}

                                <Link href={plan.paymentLink}>

                                    <Button
                                        variant="link"
                                        className={`w-full rounded-full py-4 ${index === 1
                                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                            : 'bg-black hover:bg-gray-800 text-white'
                                            }`}
                                    >

                                        <div className='flex items-center justify-center gap-2'>

                                            Get Speakssy <ArrowRight size={18} />

                                        </div>

                                    </Button>

                                </Link>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Pricing
