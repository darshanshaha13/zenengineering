import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const services = [
    "Acoustic Engineering",
    "HVAC Design",
    "Insulation Services",
    "Installation",
    "Maintenance",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                ZEN
              </div>
              <div>
                <h3 className="font-bold text-lg">Zen Engineering</h3>
                <p className="text-sm text-background/70">Solutions</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Delivering excellence through cutting-edge acoustic engineering, HVAC design, insulation, installation, and maintenance services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className="text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/80">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Pune | Kolhapur | Sangli, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/80">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919610029008" className="hover:text-primary transition-colors">
                  +91 96100 29008
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/80">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:sales@zenengineerings.com" className="hover:text-primary transition-colors">
                  sales@zenengineerings.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© {currentYear} Zen Engineering Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
