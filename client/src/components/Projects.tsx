
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Lending Club",
      description: "solution de lending Club  pour des pret en entreprise .",
      image: "https://plus.unsplash.com/premium_photo-1681581936826-31a48bc8a459?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVuZGluZyUyMGNsdWJ8ZW58MHx8MHx8fDA%3Dttps://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: [" ", "Node.js", "SQL", "Laravel"],
      liveUrl: "#",
      githubUrl: "https://github.com/Memphys-cm/Lending-Club.git",
      featured: true
    },
    {
      title: "Landing Page Bigoodeee",
      description: "Collaborative task management tool with real-time updates, team chat, and progress tracking.",
      image: "https://images.unsplash.com/photo-1623884167410-ea10ba23466a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVpdCUyMHJvc2V8ZW58MHx8MHx8fDA%3D://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React, CSS"],
      liveUrl: "https://mon-projet-r.vercel.app/",
      githubUrl: "https://github.com/ryu-max707/mon-projetR.git",
      featured: true
    },
    {
      title: "Application de gestion et suivis de status des colis  ",
      description: "Mini projet  center sur la gestion des etat et middelware.",
      image: "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29saXN8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Laravel", "livewire", "Boostrap", "Tailwindcss, SQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/ryu-max707/projetinch.git",
      featured: false
    },
    {
      title: "Générateur de CV ",
      description: "Creez votre CV  avec simplcicité .",
      image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Z8ZW58MHx8MHx8fDA%3D://www.bing.com/images/search?view=detailV2&ccid=LtY1JC%2bJ&id=5144DBA1ECBB6F29BA5FFADDE66671382B651E42&thid=OIP.LtY1JC-JsNYMnFC5E7YL3wHaKe&mediaurl=https%3a%2f%2fcdn-images.zety.fr%2fpages%2fmodele_cv_gratuit_cascade.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2ed635242f89b0d60c9c50b913b60bdf%3frik%3dQh5lKzhxZubd%252bg%26pid%3dImgRaw%26r%3d0&exph=3508&expw=2479&q=generateur+de+CV&simid=608043198442855228&FORM=IRPRST&ck=1E413BEE2C290ECDF8272F8EA220A9E2&selectedIndex=2&itb=0",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/GysAlex/CVInch-class.git",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Projets En Vedette
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Une collection de projets qui mettent en valeur mes compétences et ma passion pour le développement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="text-slate-800" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
                  >
                    <Github size={18} className="text-slate-800" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="bg-white/90 hover:bg-white p-1.5 rounded-full transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-slate-800" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-white/90 hover:bg-white p-1.5 rounded-full transition-colors duration-200"
                  >
                    <Github size={16} className="text-slate-800" />
                  </a>
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h4>
                <p className="text-slate-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
