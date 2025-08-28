import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Database, BarChart3, Brain, Target, Car, Navigation, Heart, Gamepad2, Ticket, ExternalLink, Mail, Phone, Linkedin, Github, Facebook, GraduationCap, Building, Award, Menu, X, ArrowUp, Download, Code, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    experience: 0,
    achievements: 0
  });

  const projects = [
    {
      title: "Car Price Prediction",
      year: "2025",
      icon: Car,
      githubLink: "https://github.com/badr00000/Car-price-prediction",
      technologies: ["Python", "scikit-learn", "Jupyter Notebook", "Pandas", "Matplotlib"],
      description: "Built an end-to-end ML pipeline to estimate used car prices. Cleaned and preprocessed real-world data, engineered features like brand, mileage, fuel type, and year. Trained and evaluated regression models (e.g., Random Forest), achieving an R² score of 0.85. Utilized tools such as Pandas, Scikit-learn, and Matplotlib for analysis and visualization. Final results were documented in a Jupyter Notebook with step-by-step EDA and model evaluation."
    },
    {
      title: "Autonomous Vehicle with A* Pathfinding",
      year: "2024",
      icon: Navigation,
      githubLink: "https://github.com/badr00000/Autonomous-Vehicle-with-A-Pathfinding",
      technologies: ["Python", "Arduino", "A* Algorithm", "Serial Communication"],
      description: "Designed and implemented a robotic vehicle that navigates a grid environment using the A* pathfinding algorithm. Python simulation calculated the optimal route considering obstacles, converted into movement instructions (F, L, R) sent via serial to an Arduino-controlled vehicle. Emphasized control logic optimization and real-time hardware-software integration."
    },
    {
      title: "Heart Rate Monitor System",
      year: "2025",
      icon: Heart,
      githubLink: "https://github.com/badr00000/Heart-Rate-Monitor-System",
      technologies: ["ESP32", "PPG Sensor", "OLED", "Web Interface", "ESPAsyncWebServer"],
      description: "Developed a real-time heart rate monitoring system using ESP32 and a PPG sensor. Signals were processed and displayed on an OLED screen and a live web interface using ESPAsyncWebServer. Implemented pulse detection algorithms and focused on efficient signal acquisition and low-power embedded design for biomedical use."
    },
    {
      title: "Minesweeper Game",
      year: "2025",
      icon: Gamepad2,
      githubLink: "https://github.com/badr00000/Minesweeper-Game",
      technologies: ["Python", "Tkinter", "OOP", "GUI Development"],
      description: "Built a fully functional GUI-based Minesweeper using object-oriented programming. Managed grid logic, user interactions, and dynamic tile updates with Tkinter. Demonstrated event-driven programming and modular design principles suitable for desktop applications."
    },
    {
      title: "Ticket Booking System",
      year: "2024-2025",
      icon: Ticket,
      githubLink: "https://github.com/badr00000/Ticket-Booking-System",
      technologies: ["C Programming", "File I/O", "CLI", "Data Structures"],
      description: "Developed a CLI-based ticket booking application with file-based storage. Built an interactive user interface using structured C code and emphasized memory handling, menu-driven logic, and user data persistence."
    }
  ];

  const experiences = [
    {
      title: "Digital Egypt Builders Initiative (DEBI)",
      subtitle: "AI & Data Science Track – Microsoft Data Engineer Pathway",
      organization: "Ministry of Communications",
      duration: "Aug 2025 – Present",
      icon: Building,
      status: "In Progress",
      technologies: ["Microsoft SQL", "Azure Data Factory", "DevOps", "Python", "Azure Fundamentals", "Data Warehousing"],
      achievements: [
        "Technical training in data engineering tools: Microsoft SQL, Azure Data Factory, DevOps, and Python",
        "Applied machine learning and data science workflows using real-world data in cloud environments",
        "Courses completed: Prompt Engineering, SQL Essentials, Data Warehousing, Azure Fundamentals, Data Science with Python",
        "Capstone project building a full data pipeline and analytics dashboard on Microsoft Azure",
        "Parallel tracks in soft skills (communication, teamwork) and freelancing (project delivery, branding)"
      ]
    },
    {
      title: "National Training Initiative (NTI)",
      subtitle: "Applied Machine Learning Training Program",
      organization: "Machine Learning Track",
      duration: "2024 – 2025",
      icon: GraduationCap,
      status: "Completed",
      technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "ML Algorithms"],
      achievements: [
        "Intensive training in core ML concepts: regression, classification, clustering, and evaluation metrics",
        "Hands-on experience with Python libraries: NumPy, Pandas, Scikit-learn",
        "Implemented end-to-end ML workflows including data cleaning, feature engineering, and model tuning"
      ]
    },
    {
      title: "BEDO Innovating Education",
      subtitle: "Technical & AI Training at BEDO's Applied Labs",
      organization: "Machine Learning Trainee",
      duration: "2024",
      icon: Award,
      status: "Completed",
      technologies: ["Machine Learning", "Data Preprocessing", "Algorithm Evaluation", "Applied Labs"],
      achievements: [
        "Participated in a structured Machine Learning training program through BEDO's educational platforms and lab technology",
        "Applied ML concepts to real-world engineering and educational equipment, enhancing skills in model development, data preprocessing, and algorithm evaluation"
      ]
    }
  ];

  const stats = [
    { label: "Projects Completed", value: 5, icon: Code },
    { label: "Technologies Mastered", value: 15, icon: TrendingUp },
    { label: "Years Learning", value: 3, icon: Clock },
    { label: "Certifications", value: 8, icon: CheckCircle }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "badr.islam.elewa@gmail.com",
      href: "mailto:badr.islam.elewa@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01080371123",
      href: "tel:+201080371123",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/badr-eslam-4881b12a4",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/badr00000?tab=repositories",
      color: "text-purple-400"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Facebook Profile",
      href: "https://www.facebook.com/share/1BHUe31Ji4/",
      color: "text-blue-500"
    }
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    scrollToSection('#contact');
  };

  const animateCounter = (target: number, key: keyof typeof counters) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 30);
  };

  // Track active section on scroll and show/hide scroll to top
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentPosition = window.scrollY + 100;

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate counters on component mount
  useEffect(() => {
    setTimeout(() => {
      animateCounter(5, 'projects');
      setTimeout(() => animateCounter(15, 'technologies'), 200);
      setTimeout(() => animateCounter(3, 'experience'), 400);
      setTimeout(() => animateCounter(8, 'achievements'), 600);
    }, 1000);
  }, []);

  // Create floating particles
  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div className="min-h-screen bg-black dark relative">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {createParticles()}
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`scroll-to-top glow-red ${showScrollTop ? 'visible' : ''}`}
        size="icon"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 nav-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h3 className="text-white">Badr Islam Ibrahim Elwea</h3>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md transition-all duration-300 ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-red-400 bg-red-600/10 glow-red'
                        : 'text-gray-300 hover:text-red-400 hover:bg-red-600/5'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                className="border-red-600/30 text-red-400 hover:bg-red-600/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-red-400 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 nav-blur border-t border-zinc-800">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-red-400 bg-red-600/10'
                      : 'text-gray-300 hover:text-red-400 hover:bg-red-600/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-800 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-red-600/30 text-red-400 hover:bg-red-600/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl md:text-6xl tracking-tight text-white fade-in-scale">
            Connecting Data to Intelligence
          </h1>
          <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto fade-in">
            I bridge the gap between raw data and intelligent systems, designing end-to-end solutions 
            that combine engineering excellence, analytical prowess, and AI innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 fade-in">
            <Badge className="px-3 py-1 bg-red-600/20 text-red-400 border-red-600/30 glow-red">Data Engineering</Badge>
            <Badge className="px-3 py-1 bg-red-600/20 text-red-400 border-red-600/30 glow-red">Data Science</Badge>
            <Badge className="px-3 py-1 bg-red-600/20 text-red-400 border-red-600/30 glow-red">AI/ML Engineering</Badge>
          </div>
          <Button 
            size="lg" 
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white fade-in glow-red"
            onClick={scrollToContact}
          >
            Let's Build Something Amazing
          </Button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const counterKey = index === 0 ? 'projects' : index === 1 ? 'technologies' : index === 2 ? 'experience' : 'achievements';
              return (
                <Card key={index} className="bg-zinc-900/50 border-zinc-800 text-center card-hover fade-in-scale">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-3xl font-semibold text-white mb-2 counter">
                      {counters[counterKey]}+
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12 text-white fade-in">About Me</h2>
          <div className="space-y-8">
            <div className="text-center fade-in">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My skills are in an unusual combination of Data Engineering expertise, Data Science expertise, and AI/ML engineering expertise. 
                My niche is connecting the dots between raw data and intelligent systems, there is no separation between building models and designing the entire ecosystem that drives them.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-zinc-900/50 border-zinc-800 card-hover fade-in-left">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-white">As a Data Engineer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    I create reliable, high-quality scalable data pipelines, warehouses and lakehouses 
                    to make data available efficiently and usable by downstream users.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 card-hover fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-white">As a Data Scientist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    I translate data into knowledge via and by analyzing the data statistically, performing exploratory 
                    data analysis on the data, engineering features to find hidden patterns to develop better models.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800 card-hover fade-in-right">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-white">As an AI/ML Engineer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    I make models real I scale models into production and optimize and MLOps-integrate them.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-6 fade-in">
              <div>
                <h3 className="text-white mb-4">My Competitive Advantage</h3>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  My advantages over other individuals may be considered the idea to mix these worlds: 
                  I combine my engineering way of thinking to address tricky data issues, my analytical prowess to uncover business value 
                  and my AI knowledge to provide intelligent, production grade solutions.
                </p>
              </div>

              <div>
                <h3 className="text-white mb-4">What Motivates Me</h3>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  I am motivated by environments where I get to design, build and scale end to end data driven solutions 
                  and I get excited about turning data into products that have a real impact.
                </p>
              </div>

              <Card className="max-w-2xl mx-auto bg-zinc-900/50 border-zinc-800 glow-red">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-white">
                    <Target className="w-5 h-5 text-red-400" />
                    My Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-gray-300">
                    Mission is to design data and AI solutions not only technically competent, 
                    but also that generate real value to businesses and people.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="skills" className="py-16 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white fade-in">My Core Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="h-full bg-zinc-900/50 border-zinc-800 card-hover fade-in-left">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Data Engineering</CardTitle>
                <CardDescription className="text-gray-400">
                  Building robust data infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Creating scalable data pipelines, warehouses and lakehouses that serve as the backbone 
                  for intelligent data-driven systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Data Pipelines</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">ETL/ELT</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Cloud Platforms</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full bg-zinc-900/50 border-zinc-800 card-hover fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Data Science</CardTitle>
                <CardDescription className="text-gray-400">
                  Extracting insights from complex data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Transforming raw data into actionable insights through statistical analysis, 
                  feature engineering, and advanced analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Python</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Pandas</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Statistical Analysis</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Visualization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full bg-zinc-900/50 border-zinc-800 card-hover fade-in-right">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">AI/ML Engineering</CardTitle>
                <CardDescription className="text-gray-400">
                  Deploying intelligent solutions at scale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Building and deploying machine learning models into production environments 
                  with focus on scalability and performance optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Scikit-learn</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">MLOps</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Model Deployment</Badge>
                  <Badge variant="outline" className="border-zinc-700 text-gray-300">Production AI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white fade-in">Professional Training & Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <Card key={index} className="bg-zinc-900/50 border-zinc-800 card-hover fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <CardTitle className="text-white mb-1">{experience.title}</CardTitle>
                          <CardDescription className="text-gray-400 mb-2">
                            {experience.subtitle}
                          </CardDescription>
                          <p className="text-sm text-gray-500">{experience.organization}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-red-600/20 text-red-400 border-red-600/30 glow-red">
                          {experience.duration}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            experience.status === 'In Progress' 
                              ? 'border-yellow-600/30 text-yellow-400' 
                              : 'border-green-600/30 text-green-400'
                          }`}
                        >
                          {experience.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-zinc-700 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12 text-white fade-in">Projects Portfolio</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="bg-zinc-900/50 border-zinc-800 card-hover fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-red-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-600/20 text-red-400 border-red-600/30 glow-red">
                          {project.year}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="px-2 py-1 h-7 border-red-600/30 text-red-400 hover:bg-red-600/10 glow-red"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          GitHub
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-zinc-700 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="mb-6 text-white">Let's Connect & Collaborate</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to collaborate on your next data-driven project? Reach out through any of these channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-red-600/30 transition-colors card-hover fade-in">
                  <CardContent className="p-6">
                    <Button
                      variant="ghost"
                      className="w-full h-auto p-0 hover:bg-transparent"
                      onClick={() => window.open(contact.href, '_blank')}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center glow-red">
                          <IconComponent className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <div>
                          <h4 className="text-white mb-1">{contact.label}</h4>
                          <p className="text-sm text-gray-400">{contact.value}</p>
                        </div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 fade-in">
            <p className="text-gray-400">
              Prefer email? Drop me a line at{' '}
              <a 
                href="mailto:badr.islam.elewa@gmail.com" 
                className="text-red-400 hover:text-red-300 underline glow-red"
              >
                badr.islam.elewa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <h2 className="mb-6 text-white">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate to build intelligent systems that turn your data into competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white glow-red"
              onClick={scrollToContact}
            >
              Start a Conversation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 border-red-600 text-red-400 hover:bg-red-600/10 glow-red"
              onClick={() => window.open('https://github.com/badr00000?tab=repositories', '_blank')}
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="fade-in-left">
              <h4 className="text-white mb-4">Badr Islam Ibrahim Elwea</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Data Engineer • Data Scientist • AI/ML Engineer
                <br />
                Connecting raw data to intelligent systems.
              </p>
            </div>
            
            <div className="fade-in">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <h4 className="text-white mb-4">Technologies</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>Python • SQL • Azure</p>
                <p>Pandas • Scikit-learn</p>
                <p>Machine Learning</p>
                <p>Data Engineering</p>
              </div>
            </div>

            <div className="fade-in-right">
              <h4 className="text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-red-600/10 hover:text-red-400"
                  onClick={() => window.open('https://github.com/badr00000?tab=repositories', '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-blue-600/10 hover:text-blue-400"
                  onClick={() => window.open('https://www.linkedin.com/in/badr-eslam-4881b12a4', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-red-600/10 hover:text-red-400"
                  onClick={() => window.open('mailto:badr.islam.elewa@gmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center text-gray-400 text-sm fade-in">
            <p>© 2025 Badr Islam Ibrahim Elwea. All rights reserved. Built with passion for data and AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}