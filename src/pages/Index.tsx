import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Cpu, 
  Network, 
  Sun, 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Shield, 
  Users, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import heroImage from "@/assets/hero-renewable-energy.jpg";

const Index = () => {
  const expertiseAreas = [
    {
      icon: Zap,
      title: "EPC Expertise",
      description: "End-to-end project execution in Energy & Technology domains",
      features: [
        "Engineering, Procurement & Construction services",
        "Turnkey solutions for industrial, commercial projects",
        "System design, project management, commissioning",
        "Compliance, safety, and quality standards"
      ]
    },
    {
      icon: Cpu,
      title: "Electronics Manufacturing",
      description: "Custom design and production of electronic systems",
      features: [
        "Embedded system design, PCBs, power electronics",
        "Industrial automation & control systems",
        "Prototyping to mass-scale manufacturing",
        "Industry-specific electronics for reliability"
      ]
    },
    {
      icon: Network,
      title: "IoT & Software Solutions",
      description: "Smart connectivity, monitoring, and automation platforms",
      features: [
        "IoT devices & cloud platforms for real-time monitoring",
        "Predictive analytics & AI-driven automation",
        "Smart grids, industrial IoT, building management",
        "Custom dashboards, mobile apps, API integrations"
      ]
    },
    {
      icon: Sun,
      title: "Renewable Energy Integration",
      description: "Sustainable power solutions for tomorrow",
      features: [
        "Rooftop & ground-mounted solar PV projects",
        "Energy storage systems, batteries, microgrids",
        "Energy management for cost optimization",
        "End-to-end design, installation, and O&M"
      ]
    }
  ];

  const coreValues = [
    { icon: Heart, title: "Sustainability", description: "Environmental responsibility at our core" },
    { icon: Lightbulb, title: "Innovation", description: "Technological excellence in every solution" },
    { icon: Shield, title: "Reliability", description: "Resilient systems you can trust" },
    { icon: Users, title: "Customer-Centric", description: "Design & support focused on your success" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            HEDAOO ECOAUTOGRID
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto">
            Integrated Solutions in EPC, Electronics, IoT & Renewable Energy
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Delivering sustainable, autonomous energy infrastructure systems that empower communities and industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Explore Our Solutions
            </Button>
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HEDAOO ECOAUTOGRID PVT LTD offers integrated solutions combining EPC, Electronics, IoT, and Renewable Energy under one roof. 
              We have a proven track record of delivering reliable, sustainable, and scalable solutions with a customer-centric approach 
              emphasizing ROI, efficiency, and long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-8 h-8 text-secondary" />
                  <CardTitle className="text-3xl">Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver sustainable, autonomous energy infrastructure systems that empower communities and industries 
                  with reliable, eco-friendly power.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-8 h-8 text-secondary" />
                  <CardTitle className="text-3xl">Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To lead in auto-grid / microgrid solutions integrating renewables, storage, and smart control, 
                  enabling carbon-neutral energy access across India and beyond.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card 
                  key={index} 
                  className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-[var(--transition-bounce)]"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive solutions across the complete technology and energy value chain
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index}
                className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] border-l-4 border-l-secondary"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{area.title}</CardTitle>
                      <CardDescription className="text-base">{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {area.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to transform your energy infrastructure? Let's discuss how we can help.
            </p>
            
            <Card className="shadow-[var(--shadow-card)]">
              <CardContent className="pt-8">
                <div className="grid sm:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">contact@hedaooecoautogrid.com</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">+91 XXX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button size="lg" variant="hero">
                    Get In Touch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2025 HEDAOO ECOAUTOGRID PVT LTD. All rights reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Empowering sustainable energy solutions across India and beyond
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
