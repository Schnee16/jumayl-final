import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100, 'Nama terlalu panjang'),
  email: z.string().trim().email('Email tidak valid').max(255, 'Email terlalu panjang'),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200, 'Subjek terlalu panjang'),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000, 'Pesan terlalu panjang'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jumayl16arsy@gmail.com',
    href: 'mailto:hello@developer.com',
  },
  {
    icon: Phone,
    label: 'Number',
    value: '+62 8954 0242 6309',
    href: 'tel:+62895402426309',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Messages Delivered! ✨',
        description: "Thank you for contacting me, i'll reply as soon as possible.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      toast({
        title: 'Gagal Mengirim',
        description: 'Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#f5f5f0] dark:bg-[#203020]">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#b57e4c] font-medium mb-2 block">
            Contact
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#204030] dark:text-[#d0e0c0]">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-[#b57e4c] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-[#204030] dark:text-[#e6f0e6]">
                Let's Collaborate!
              </h3>
              <p className="text-[#406050] dark:text-[#b0c0a0]">
                Reach out if you have a project or idea to share
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    
                    bg-white/70 dark:bg-[#2c3e2f]/60
                    backdrop-blur-xl
                    
                    border border-[#b57e4c]/30
                    
                    shadow-md hover:shadow-[0_10px_30px_rgba(181,126,76,0.35)]
                    
                    transition-all group
                  "
                >
                  <div className="p-3 rounded-lg bg-[#b57e4c]/10 group-hover:bg-[#b57e4c]/20 transition">
                    <info.icon className="h-5 w-5 text-[#b57e4c]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#406050] dark:text-[#b0c0a0]">{info.label}</p>
                    <p className="font-medium text-[#204030] dark:text-[#e6f0e6]">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="
                space-y-6 p-6 rounded-2xl
                
                bg-white/70 dark:bg-[#2c3e2f]/60
                backdrop-blur-xl
                
                border border-[#b57e4c]/30
                
                shadow-md hover:shadow-[0_15px_40px_rgba(181,126,76,0.35)]
                
                transition-all
              "
            >
              <div className="grid sm:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#b57e4c]">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#b57e4c]">Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#b57e4c]">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#b57e4c]">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-[#b57e4c] hover:bg-[#8a623c] text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}