"use client";

const FeaturedEvents = () => {
  const events = [
    { 
      title: "3D Design Battle", 
      category: "Simulation",
      desc: "Test your problem-solving skills with complex simulations and scenarios.",
      color: "#00ffff",
      id: "XD-349",
      image: "/3ddesignbattle.webp"
    },
    { 
      title: "Case Study", 
      category: "Engineering",
      desc: "Dive deep into real-world engineering cases and come up with innovative solutions.",
      color: "#ff00ff",
      id: "CS-882",
      image: "/casestudy.webp"
    },
    { 
      title: "General", 
      category: "Culture & Logic",
      desc: "Quiz, Debate, Cultural events etc.. Engaging sessions for all minds.",
      color: "#ffff00",
      id: "GL-102",
      image: "/quiz.webp"
    },
    { 
      title: "Fun Activities", 
      category: "Interactive",
      desc: "Engage in exciting and interactive activities to unwind and have fun.",
      color: "#00ff00",
      id: "FA-556",
      image: "/funactivities.webp"
    },
    { 
      title: "Hardware Challenge", 
      category: "Innovation",
      desc: "Compete in designing innovative hardware solutions to real-world problems.",
      color: "#ff4d00",
      id: "HC-221",
      image: "/image2.webp"
    },
    { 
      title: "Mystery Event?", 
      category: "Secret",
      desc: "Event closes with a banger. Prepare for the unexpected. Termination imminent.",
      color: "#ffffff",
      id: "MX-000",
      image: "/mysteryevent.webp"
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 pb-[80vh]">
      <div className="text-center mb-16 md:mb-32 featured-heading">
        <h2 className="text-4xl md:text-9xl font-black text-white uppercase tracking-[0.1em] md:tracking-[0.15em] mb-4 md:mb-6 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Core <span className="text-primary italic">Events</span>
        </h2>
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <div className="h-[1px] md:h-[2px] w-12 md:w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
          <p className="text-primary font-mono text-[8px] md:text-sm tracking-[0.4em] md:tracking-[0.8em] uppercase opacity-80">
             // SECTOR_07_ASSIGNMENT
          </p>
          <div className="h-[1px] md:h-[2px] w-12 md:w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-24">
        {events.map((event, index) => (
          <div 
            key={index}
            className="featured-card group relative h-[450px] md:h-[500px] bg-black border border-white/5 rounded-none overflow-hidden transition-all duration-700 hover:border-primary/50"
          >
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-primary/30" />
            
            {/* Phase Big Number Overlay */}
            <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8 text-[8rem] md:text-[12rem] font-black text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-700 select-none">
              {index + 1}
            </div>

            {/* Visual Header / Image */}
            <div className="h-2/5 md:h-1/2 w-full bg-neutral-950 relative border-b border-white/5 overflow-hidden">
               <img 
                 src={event.image} 
                 alt={event.title}
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
               />
               
               {/* Technical Scanline Animation */}
               <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                 <div className="w-full h-[2px] bg-primary/20 absolute top-0 animate-[scan_3s_linear_infinite]" 
                   style={{ boxShadow: '0 0 10px var(--color-primary)' }} 
                 />
                 <div className="w-full h-full opacity-10" 
                   style={{ 
                     backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(230,81,0,0.1) 1px, rgba(230,81,0,0.1) 2px)',
                     backgroundSize: '100% 4px'
                   }}
                 />
               </div>

               <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-1000" 
                style={{ 
                  backgroundImage: `linear-gradient(${event.color}aa 1px, transparent 1px), linear-gradient(90deg, ${event.color}aa 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Circular ID badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative group-hover:scale-110 transition-transform duration-1000">
                    <div 
                      className="w-20 h-20 md:w-24 md:h-24 border border-white/10 flex items-center justify-center relative backdrop-blur-sm"
                      style={{ boxShadow: `inset 0 0 40px ${event.color}11` }}
                    >
                      <div className="text-[8px] md:text-[10px] font-mono text-white/40 tracking-[0.2em]">{event.id}</div>
                      {/* Corner Accents */}
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-primary" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-primary" />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-[-12px] md:inset-[-15px] border border-white/5 rounded-full border-t-primary/40 border-l-transparent animate-spin" />
                 </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 md:p-10 flex flex-col h-3/5 md:h-1/2 justify-between relative bg-black">
              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 md:w-10 h-[1px] bg-primary/40" />
                  <span className="text-primary font-mono text-[8px] md:text-[10px] tracking-widest uppercase">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
                  {event.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="font-mono text-[8px] md:text-[10px] text-white/20">
                  <span className="text-primary">00:00:</span>{index < 3 ? '42' : '99'}
                </div>
                <button className="text-[8px] md:text-[10px] font-mono text-primary border border-primary/20 px-3 md:px-4 py-1.5 md:py-2 hover:bg-primary/10 transition-colors">
                  ACCESS_LOGS
                </button>
              </div>
            </div>

            {/* Hidden Scroll Transition Trigger overlay */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-linear-to-r from-transparent via-white/[0.05] to-transparent group-hover:left-[100%] transition-all duration-1000 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
