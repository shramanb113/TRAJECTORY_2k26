const EventTimelineSection = () => {
  const events = [
    {
      day: "Day 1",
      date: "April 2, 2025",
      title: "Opening Ceremony!",
      desc: "Get ready for a day of fun and games, and meet your fellow participants.",
    },
    {
      day: "Day 2",
      date: "April 3, 2025",
      title: "Hardware Showdown!",
      desc: "Learn how to build your own AR/VR hardware from scratch.",
    },
    {
      day: "Day 3",
      date: "April 4, 2025",
      title: "Brainstorming!",
      desc: "Engage in a quiz debate and collaborative sessions to generate innovative ideas.",
    },
    {
      day: "Final Night",
      date: "April 4, 2025",
      title: "Closing Ceremony",
      desc: "Closing ceremony and awards presentation. Celebrate your achievements with your team!",
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
      <div className="container mx-auto px-4 mt-[15vh]">
        <div className="text-center mb-12 timeline-heading">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter filter drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            Event Timeline
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(0,255,255,1)]" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {events.map((item, index) => (
            <div 
              key={index} 
              className="timeline-card opacity-0 translate-y-20 bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-30" />
              
              <div className="flex flex-col h-full">
                <span className="text-primary font-mono text-sm tracking-[0.2em] mb-2">
                  {item.day}
                </span>
                <span className="text-gray-500 font-mono text-xs mb-4">
                  {item.date}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimelineSection;
