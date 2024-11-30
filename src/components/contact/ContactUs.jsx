import { NavLink } from "react-router"

export default function ContactUs() {
  return (
<section id="contact-us">
        <div className="container mx-auto px-5 lg:px-0">
            <div className="lg:grid grid-cols-2 gap-10">
                <div className="contact-info  pb-5">
                    <img src="images/blogpage-img1.png" alt="" />
                    <h2 className="font-heading text-4xl font-thin mb-3 mt-10">Contact Information</h2>
                    <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                    <div className="page-content flex flex-wrap mt-7">
                        <div className="">
                            <div className="content-box pr-20 mb-5">
                                <h4 className="card-title font-heading text-xl">Office</h4>
                                <div className="contact-address pt-3">
                                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                                </div>
                                <div className="contact-number">
                                    <p>
                                        <NavLink to="#">+123 987 321</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#">+123 123 654</NavLink>
                                    </p>
                                </div>
                                <div className="email-address">
                                    <p>
                                        <NavLink to="#">contactoffice@website.com</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="content-box">
                                <h4 className="card-title font-heading text-xl">Management</h4>
                                <div className="contact-address pt-3">
                                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                                </div>
                                <div className="contact-number">
                                    <p>
                                        <NavLink to="#">+123 987 321</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="#">+123 123 654</NavLink>
                                    </p>
                                </div>
                                <div className="email-address">
                                    <p>
                                        <NavLink to="#">contactmanagement@website.com</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inquiry-item mt-20 lg:mt-0">
                    <div className="rounded-5">
                        <h2 className="font-heading text-4xl font-thin mb-3">Get in Touch</h2>
                        <p>Use the form below to get in touch with us.</p>
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
        </div>
    </section>
  )
}
