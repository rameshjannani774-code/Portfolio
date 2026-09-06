import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();
try {
    // Corrected to the full loopback address, backend port, and endpoint
    const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message Sent Successfully");
      setFormData({ name: '', email: '', message: '' });
    }
    else{
        alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while sending the message. Please try again.");
  }
};


    return (
        <section 
            id="contact" 
            className="relative z-50 bg-black/90 backdrop-blur-lg text-white py-24 px-6 md:px-16 lg:px-24 border-t border-purple-500/20 w-full flex items-center justify-center"
        >
            {/* Soft Ambient Purple Background Light Aura */}
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {/* Changed max-w-6xl to max-w-2xl to fit a single centered column form */}
            <div className="max-w-2xl w-full mx-auto relative z-10">
                
                {/* COMPACT CENTERED SECTION HEADER */}
                <div className="mb-12 text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2 font-mono">
                        06 // CONNECT
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        GET IN <span className="text-purple-500">TOUCH</span>
                    </h2>
                </div>

                {/* SOLID BASE BLACK FORM CONSOLE (Now taking up the entire middle width alignment) */}
                <form 
                    onSubmit={handleSubmit}
                    className="w-full p-8 bg-neutral-950/90 border border-purple-500/30 backdrop-blur-md space-y-6 shadow-2xl relative"
                >
                    {/* Name Input Container */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-200 font-black">
                            Full Identifier [ Name ]
                        </label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-neutral-900 border border-zinc-700 text-sm text-white px-4 py-3 rounded-none placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition duration-300 font-medium"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email Input Container */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-200 font-black">
                            Return Endpoint [ Email Address ]
                        </label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-neutral-900 border border-zinc-700 text-sm text-white px-4 py-3 rounded-none placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition duration-300 font-medium"
                            placeholder="Yourname@example.com"
                        />
                    </div>

                    {/* Message Input Container */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-200 font-black">
                            Transmission Payload [ Message ]
                        </label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full bg-neutral-900 border border-zinc-700 text-sm text-white px-4 py-3 rounded-none resize-none placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition duration-300 font-medium"
                            placeholder="Let's build something exceptional..."
                        />
                    </div>

                    {/* Submit Dispatch Button */}
                    <div className="pt-2">
                        <button 
                            type="submit"
                            className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-wider text-xs rounded-none transition duration-300 shadow-lg border border-purple-400/20 hover:scale-[1.01]"
                        >
                            Dispatch Message
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Contact;
