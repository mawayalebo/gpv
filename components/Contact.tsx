function Contact() {
    return ( 
        <section>
            <div className="flex flex-col">
                {/* heading */}
                <div className="flex justify-center p-2">
                    <h1 className="text-5xl font-semibold text-white">Contact us</h1>
                </div>
                {/* contact form */}
                <form action="">
                    <div className="bg-[#f3f1f183] rounded-xl shadow-sm p-10 flex items-center justify-center gap-4 flex-wrap">
                        <div className="flex space-x-4 flex-col flex-1">
                            <label htmlFor="name" className="font-semibold ml-6">Name</label>
                            <input type="text" id="name" className="p-2 rounded-3xl bg-slate-300 flex-1"/>
                        </div> 
                        <div className="flex space-x-4 flex-col flex-1">
                            <label htmlFor="email" className="font-semibold ml-6">Email</label>
                            <input type="email" id="email" className="p-2 rounded-3xl bg-slate-300 flex-1" />
                        </div>
                        <div className="flex space-x-4 flex-col flex-1">
                            <label htmlFor="message" className="font-semibold ml-6">Message</label>
                            <textarea id="message" rows={4} cols={30} className="p-2 rounded-3xl bg-slate-300 flex-1" />
                        </div>
                        <div className="flex items-center justify-center bg-purple-900 p-3 hover:scale-105 hover:transition duration-300 delay-200 rounded-xl px-3 cursor-pointer w-[70%]">
                            <button type="submit" className="text-gray-200 font-semibold">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
     );
}

export default Contact;