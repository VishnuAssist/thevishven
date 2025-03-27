import React, { useEffect, useState } from 'react';
import { Code, Mail, Github, Linkedin, User, Briefcase, FileCode, Send, Award, Book, Clock, Coffee, Globe, Heart } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      technologies: ["TypeScript", "Next.js", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const stats = [
    { icon: Coffee, label: "Coffee Consumed", value: "1,234+" },
    { icon: Clock, label: "Hours Coded", value: "5,000+" },
    { icon: Heart, label: "Happy Clients", value: "100+" },
    { icon: Globe, label: "Countries Reached", value: "25+" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      content: "An exceptional developer who consistently delivers outstanding results.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "Incredible attention to detail and amazing problem-solving skills.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Emily Davis",
      role: "Tech Lead",
      content: "A true professional who brings innovation to every project.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5">
        <div className="text-center">
          <div className="mb-6 inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white transform hover:scale-110 transition-transform duration-300">
            <Code className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I build exceptional and scalable web applications with modern technologies
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
            >
              <Briefcase className="w-5 h-5" />
              View Projects
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section id="stats" title="">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{value}</p>
                <p className="text-gray-600 dark:text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies, I create seamless
                user experiences while ensuring robust and scalable backend systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <User className="w-5 h-5 text-blue-500" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <FileCode className="w-5 h-5 text-purple-500" />
                  <span>50+ Projects</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition-transform hover:shadow-lg"
                  >
                    <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="What I Do">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description: "Building responsive and performant web applications with modern frameworks"
              },
              {
                icon: Book,
                title: "Technical Consulting",
                description: "Providing expert advice on architecture and technology choices"
              },
              {
                icon: Award,
                title: "UI/UX Design",
                description: "Creating beautiful and intuitive user interfaces with attention to detail"
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="My Projects">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" title="What People Say">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="max-w-2xl mx-auto px-4">
          <form className="space-y-6 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}

export default App;