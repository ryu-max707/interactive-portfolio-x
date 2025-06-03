import React from "react";

const getIcon = (name: string): string => {
  const icons: Record<string, string> = {
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    visily: "https://img.icons8.com/fluency/48/design--v1.png", 
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    butbucket: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    webpack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico"
  };

  const key = name.toLowerCase().replace(/\s/g, "").replace(".js", "js");
  return icons[key] || "https://img.icons8.com/ios-filled/50/code.png";
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 50, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind", level: 72, color: "from-teal-500 to-cyan-500" },
        { name: "Vue", level: 35, color: "from-green-500 to-green-600" },
        { name: "Next.js", level: 10, color: "from-gray-700 to-gray-900" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node", level: 80, color: "from-green-600 to-green-700" },
        { name: "Php", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "SQL", level: 88, color: "from-blue-700 to-indigo-700" },
        { name: "MongoDB", level: 32, color: "from-green-500 to-green-700" },
        { name: "Laravel", level: 90, color: "from-gray-600 to-gray-700" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 93, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Visily", level: 75, color: "from-yellow-600 to-orange-600" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Butbucket", level: 78, color: "from-pink-500 to-purple-500" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Les technologies avec lesquelles je travaille pour donner vie aux idées
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={getIcon(skill.name)}
                          alt={`${skill.name} icon`}
                          className="w-6 h-6"
                        />
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-purple-300 text-sm">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `slideIn 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-purple-300">Technologies supplémentaires</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Wordpress", "Webpack", "Vite", "Python", "Firebase", "Vercel"].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 rounded-full text-purple-200 font-medium hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={getIcon(tech)}
                  alt={`${tech} icon`}
                  className="w-5 h-5"
                />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
