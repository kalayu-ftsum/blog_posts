import { NavLink } from "react-router"
export default function FaqForm() {
  return (
    <section id="faqs">
    <div className="container mx-auto px-5 lg:px-0">
        <div className="lg:grid grid-cols-3 gap-20">

                <div className=" faq-items col-span-2">
                    <h2 className="font-heading text-4xl font-thin mb-3">Frequently asked questions</h2>
                    <p className="mb-7">Malesuada nunc vel risus commodo viverra. Viverra accumsan in nisl nisi. Pretium nibh ipsum
                        consequat
                        nisl
                        vel pretium. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                    <section className="mt-5">
                        <h3 className="font-heading font-semibold text-gray-400 text-xl">General</h3>
                        <dl className="mt-2 divide-y divide-slate-100">
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    How to start blogging?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    Do i need to have a website?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>

                        </dl>
                    </section>
                    <section className="mt-5">
                        <h3 className="font-heading font-semibold text-gray-400 text-xl">Blogging</h3>
                        <dl className="mt-2 divide-y divide-slate-100">
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    Can i get be a blogger too ?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    What should i do to start blogging website?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    How do you earn money from blogging?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>

                        </dl>
                    </section>
                    <section className="mt-5">
                        <h3 className="font-heading font-semibold text-gray-400 text-xl">Support</h3>
                        <dl className="mt-2 divide-y divide-slate-100">
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    Can i contact with you directly?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>
                            <details className="group py-4 ">
                                <summary className="flex w-full cursor-pointer select-none justify-between text-left text-lg font-semibold leading-7 ">
                                    Where is your location?<svg className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-black" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 12H6"></path>
                                        <path className="group-open:hidden" d="M12 6v12"></path>
                                    </svg></summary>
                                <div className="pb-6 pt-6">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores. In dignissimos eveniet eius exercitationem at soluta rem, fugit ipsum autem pariatur facilis sequi nemo expedita ut provident laborum eligendi?</p>
                                    </div>
                                </div>
                            </details>

                        </dl>
                    </section>

                </div>

            <div className="inquiry-item mt-20 lg:mt-0">
                <h3 className="section-title font-heading text-4xl font-thin mb-3">Ask us anything</h3>
                <p>Call Us +123 987 456 or just drop us your message at <NavLink to="mailto:contact@yourcompany.com">contact@yourcompany.com</NavLink>. You can directly message
                    us. </p>
                    <div className="grid  gap-2 mt-7">
                        <label className="block">
                            <span className="text-black">Full name</span>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" placeholder="Your Name" />
                        </label>
                        <label className="block">
                            <span className="text-black">E-mail Address</span>

                            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" placeholder="E-mail Address" />
                        </label>
                        <label className="block">
                            <span className="text-black">Phone Number</span>

                            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" placeholder="Phone Number" />
                        </label>
                        <label className="block">
                            <span className="text-black">Subject</span>

                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" placeholder="Subject" />
                        </label>
                        <label className="block">
                            <span className="text-black">Your Message</span>

                            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" id="subject" name="subject" placeholder="Write your subject here" rows="4"></textarea>
                        </label>


                        <button className="bg-primary rounded-md text-white uppercase p-3 mt-3" type="button">Submit</button>
                    </div>
            </div>
        </div>

    </div>
</section>
  )
}
