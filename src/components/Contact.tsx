import React, { useState } from 'react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // ✅ send to your MockAPI resource
      await axios.post(
        'https://68bd02f60f2491613ee03c59.mockapi.io/messages',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-foreground">Contact Information</h3>
              <div className="space-y-3">
                <a href="mailto:ghimire.unika505@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">
                  ghimire.unika505@gmail.com
                </a>
                <a href="tel:+15551234567" className="block text-muted-foreground hover:text-primary transition-colors">
                  9842525351
                </a>
                <p className="text-muted-foreground">Dholahiti, Lalitpur-26</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-foreground">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/unika-ghimire/' },
                  { name: 'GitHub', url: 'https://github.com/UnikaGhimire/' },
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-background border rounded-md text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors ${
                      errors.name ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-background border rounded-md text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Project discussion"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-3 py-2 bg-background border rounded-md text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-md font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
