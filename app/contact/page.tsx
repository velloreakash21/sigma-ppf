import { Metadata } from 'next';
import { Mail, MapPin, Phone, Instagram, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import { contactInfo } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Contact Us | Sigma PPF',
  description: 'Get in touch with Sigma PPF for premium paint protection film solutions. Contact us for inquiries, quotes, or support.',
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: contactInfo.address,
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: contactInfo.instagram,
    href: contactInfo.instagramUrl,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4 py-24">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-sm">Get In Touch</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's <span className="gradient-text">Connect</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Have questions about our products or need a quote? We're here to help.
              Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  Send Us a Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="text-white/60">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl border border-white/5 p-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  Contact Information
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-6">
                  Reach Out Directly
                </h3>

                <div className="space-y-4">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-4 bg-dark-50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm mb-1">{item.label}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-dark-50 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                </div>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white/50">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169841177!2d78.24323006640625!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706600000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sigma PPF Location - Hyderabad, India"
                  />
                </div>
                {/* Overlay with location badge */}
                <div className="absolute bottom-4 left-4 bg-dark/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-white text-sm font-medium">Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info Section */}
      <section className="section-padding bg-dark-50 border-t border-white/5">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have More Questions?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Check out our products page for detailed information about our PPF solutions,
            or reach out to us directly through any of the channels above.
          </p>
          <a href="/products" className="btn-primary px-8 py-4 inline-block">
            Explore Our Products
          </a>
        </div>
      </section>
    </>
  );
}
