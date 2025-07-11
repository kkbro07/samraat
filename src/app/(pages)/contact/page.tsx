import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: 'Contact Us | Samraat',
  description: 'Get in touch with Samraat for inquiries and premium customer care.',
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-foreground">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are here to assist you. Please reach out through the form below or contact our premium customer care.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-border">
              <h2 className="text-2xl font-headline text-foreground">Send a Message</h2>
              <form action="#" method="POST" className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input type="text" name="name" id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input type="email" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea name="message" id="message" rows={5} placeholder="Your Message" required />
                </div>
                <div>
                  <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-none">
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-muted-foreground">For inquiries, support, and press.</p>
                  <a href="mailto:care@samraat.com" className="mt-2 inline-block font-medium text-primary hover:underline">care@samraat.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-muted-foreground">Our customer care is available 24/7.</p>
                  <a href="tel:+91234567890" className="mt-2 inline-block font-medium text-primary hover:underline">+91 234 567 890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Flagship Store</h3>
                  <p className="mt-1 text-muted-foreground">123 Khan Market<br/>New Delhi, India 110003</p>
                  <a href="#" className="mt-2 inline-block font-medium text-primary hover:underline">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
