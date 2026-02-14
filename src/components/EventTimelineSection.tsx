const EventTimelineSection = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <div className="container mx-auto px-4 mt-[20vh]"> {/* Push down to be seen through center */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] uppercase tracking-tighter shadow-lg shadow-cyan-500/50">
            Event Timeline
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto border-l-2 border-[var(--color-primary)] pl-8 space-y-12 bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          {[
            { year: "2K26", title: "Initiation", desc: "System boot sequence engaged due to anomalies." },
            { year: "2027", title: "The Merge", desc: "Biological and digital entities begin detailed integration." },
            { year: "2028", title: "Total Recall", desc: "Global network archives all human memory." },
            { year: "2029", title: "Singularity", desc: "Machine intelligence surpasses collective human cognition." },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[var(--color-accent)] border-4 border-black group-hover:scale-150 transition-transform" />
              <div className="bg-[#111]/80 p-6 rounded-lg border border-[#333] hover:border-[var(--color-primary)] transition-colors duration-300">
                <span className="text-[var(--color-primary)] font-mono text-sm tracking-widest">{item.year}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimelineSection;
