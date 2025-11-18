const clients = [
  {
    name: "Shubham Builders",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Shubham-Builders-Pune-Logo.png"
  },
  {
    name: "Chitale Dairy",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Chitale-Dairy-Logo.png"
  },
  {
    name: "Panchshil Builders",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Panchshil-Builders-Logo.png"
  },
  {
    name: "Bharati Vidyapeeth",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Bharati-Vidhyapeeth-Logo-300x71.png"
  },
  {
    name: "Indian Army",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/GOI-ARMY-logo.png"
  },
  {
    name: "CSIBER Kolhapur",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/CSIBER-Kolhapur-India-logo.png"
  },
  {
    name: "Eleganz Interiors",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Eleganz-Interior-Ltd-Logo.png"
  },
  {
    name: "LES",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/LES-logo.png"
  }
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Valued Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Proud to serve leading organizations across various industries with our engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center p-6 bg-background rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
