
export default function ComentSection() {
  return (
    <section className="comment-respond mt-10 ">
    <div className="container mx-auto px-5 lg:px-60">
        <h3 className="font-heading text-4xl font-thin mb-5">Leave a Comment</h3>
        <div className="grid  gap-2">

            <label className="block">
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" placeholder="Your Name" />
            </label>
            <label className="block">
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" placeholder="E-mail Address" />
            </label>
            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500  focus:ring-gray-300 focus:ring-opacity-50" id="comment" name="comment" placeholder="Write your comment here" rows="4"></textarea>
            <label className="block">
                <input type="checkbox" className="text-primary active:bg-primary focus:bg-primary focus:ring-primary focus:ring-opacity-50 rounded-md" />
                <span className="label-body ps-2">Save my name, email, and website in this browser for
                    the next time I comment.</span>
            </label>
            <button className="bg-primary rounded-md text-white uppercase p-3" type="button">Submit</button>

        </div>

    </div>
</section>
  )
}
