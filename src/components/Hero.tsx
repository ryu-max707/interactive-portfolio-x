
import { Github, ExternalLink } from "lucide-react";


  const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue via-purple-200 to-blue-150 bg-clip-text text-transparent">MBOCK Ryu Salvador</h1>
          <h4 className="text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-blue-200 bg-clip-text text-transparent">
            Full Stack Developer / Formater / IT Officier 
          </h4>

          {/* Photo de profil */}
          <div className="relative mt-8 mb-12">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-2xl mx-auto flex items-center justify-center">
              <img 
                src="/profile.jpg" 
                alt="MBOCK Ryu Salvador" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button className="border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
                <Github size={20} />
                GitHub
              </button>
              <button className="border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
                <ExternalLink size={20} />
                Portfolio
              </button>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
             Développeur Full Stack passionné, j'aide les  startups et entreprises à concevoir des applications web puissantes, performantes et élégantes. Spécialisé Laravel + React js , livewire, je construis des solutions sur-mesure du back-end à l'interface utilisateur.

🔍 Disponible  pour missions freelance, projets tech et collaborations sérieuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              
            >
              View My Work 
            </button>
            <button className="border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2" >
              
                      GitHub Profile <a href="https://github.com/ryu-max707"  target="_blank" rel="noopener noreferrer"
          className="border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
        >
          <Github size={20} />
   
</a>

            </button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-slate-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
