"use client";

const FeaturedEvents = () => {
  const events = [
    { 
      title: "3D Design Battle", 
      category: "Simulation",
      desc: "Test your problem-solving skills with complex simulations and scenarios.",
      color: "#00ffff",
      id: "XD-349"
    },
    { 
      title: "Case Study", 
      category: "Engineering",
      desc: "Dive deep into real-world engineering cases and come up with innovative solutions.",
      color: "#ff00ff",
      id: "CS-882"
    },
    { 
      title: "General", 
      category: "Culture & Logic",
      desc: "Quiz, Debate, Cultural events etc.. Engaging sessions for all minds.",
      color: "#ffff00",
      id: "GL-102"
    },
    { 
      title: "Fun Activities", 
      category: "Interactive",
      desc: "Engage in exciting and interactive activities to unwind and have fun.",
      color: "#00ff00",
      id: "FA-556"
    },
    { 
      title: "Hardware Challenge", 
      category: "Innovation",
      desc: "Compete in designing innovative hardware solutions to real-world problems.",
      color: "#ff4d00",
      id: "HC-221"
    },
    { 
      title: "Mystery Event?", 
      category: "Secret",
      desc: "Event closes with a banger. Prepare for the unexpected. Termination imminent.",
      color: "#ffffff",
      id: "MX-000"
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 pb-[40vh]">
      <div className="text-center mb-32 featured-heading">
        <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-[0.15em] mb-6 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Core <span className="text-primary italic">Events</span>
        </h2>
        <div className="flex items-center justify-center gap-6">
          <div className="h-[2px] w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
          <p className="text-primary font-mono text-xs md:text-sm tracking-[0.8em] uppercase opacity-80">
             // SECTOR_07_ASSIGNMENT
          </p>
          <div className="h-[2px] w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {events.map((event, index) => (
          <div 
            key={index}
            className="featured-card group relative h-[500px] bg-black border border-white/5 rounded-none overflow-hidden transition-all duration-700 hover:border-primary/50"
          >
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-primary/30" />
            
            {/* Phase Big Number Overlay */}
            <div className="absolute -right-8 -top-8 text-[12rem] font-black text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-700 select-none">
              {index + 1}
            </div>

            {/* Visual Header */}
            <div className="h-1/2 w-full bg-neutral-950 relative border-b border-white/5">
               <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-1000" 
                style={{ 
                  backgroundImage: `linear-gradient(${event.color}aa 1px, transparent 1px), linear-gradient(90deg, ${event.color}aa 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              
              {/* Animated HUD line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5" />
              
              {/* Circular ID badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative group-hover:scale-110 transition-transform duration-1000">
                    <div 
                      className="w-24 h-24 border border-white/10 flex items-center justify-center relative"
                      style={{ boxShadow: `inset 0 0 40px ${event.color}11` }}
                    >
                      <div className="text-[10px] font-mono text-white/40 tracking-[0.2em]">{event.id}</div>
                      {/* Corner Accents */}
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-primary" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-primary" />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-[-15px] border border-white/5 rounded-full border-t-primary/40 border-l-transparent animate-spin" />
                 </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-10 flex flex-col h-1/2 justify-between relative bg-black">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[1px] bg-primary/40" />
                  <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                  {event.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] text-white/20">
                  <span className="text-primary">00:00:</span>{index < 3 ? '42' : '99'}
                </div>
                <button className="text-[10px] font-mono text-primary border border-primary/20 px-4 py-2 hover:bg-primary/10 transition-colors">
                  ACCESS_LOGS
                </button>
              </div>
            </div>

            {/* Robotic Scan Overlay */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-linear-to-r from-transparent via-white/[0.05] to-transparent group-hover:left-[100%] transition-all duration-1000 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
