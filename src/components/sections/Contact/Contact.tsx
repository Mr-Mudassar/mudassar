"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mudassarmuhammad776@gmail.com", href: "mailto:mudassarmuhammad776@gmail.com", color: "text-purple-400" },
    { icon: Phone, label: "Phone", value: "+92-321-6071387", href: "tel:+923216071387", color: "text-blue-400" },
    { icon: MapPin, label: "Location", value: "Lahore, Punjab, Pakistan", href: "#", color: "text-emerald-400" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0d17]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-purple-500" />
                  <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-4xl font-black text-white mb-6 leading-tight">
                  Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-glow md:text-6xl">Legendary.</span>
                </h2>
                <p className="text-white/40 text-lg max-w-md leading-relaxed">
                  Whether you have a specific project in mind or just want to say hi, my inbox is always open.
                </p>
              </motion.div>

              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 group-hover:text-white group-hover:border-white/20 transition-all">
                      <info.icon size={24} className={info.color} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-white font-bold group-hover:text-purple-400 transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2.5rem] blur-xl opacity-20" />
              <div className="relative glass-card rounded-[2.5rem] p-10 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">How can I help?</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </div>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
