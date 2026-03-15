import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Calendar, User } from 'lucide-react';
import { projects } from './projectsData';

export const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const showFullDojoyHero = project?.id === 'dojoy-toys';
  const showFullVerticalImage2 = Boolean(
    project?.id === 'song-platform' && project?.image2?.includes('SongPlatform2')
  );
  const showFullVerticalBeforeSolution =
    project?.id === 'song-platform' && project?.imageBeforeSolution?.includes('SongPlatform2');
  const enlargeSongPlatform4 = Boolean(
    project?.id === 'song-platform' && project?.image2?.includes('SongPlatform4')
  );
  const songPlatformLowerParagraph = project?.id === 'song-platform'
    ? project.challenge.match(/With 2,200[\s\S]*/)?.[0]?.trim()
    : null;
  const songPlatformUpperChallengeText =
    project?.id === 'song-platform' && songPlatformLowerParagraph
      ? project.challenge.replace(songPlatformLowerParagraph, '').trim()
      : project?.challenge ?? '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-mono uppercase tracking-widest rounded-full">
              {project.category}
            </span>
            <span className="h-px w-12 bg-white/10 hidden sm:block"></span>
            <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">{project.result}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight break-words">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-zinc-400 border-t border-b border-white/10 py-6">
            <div className="flex items-center gap-3">
              <User size={18} className="text-orange-500" />
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Client</div>
                <div className="text-white font-medium">{project.client}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-orange-500" />
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Timeline</div>
                <div className="text-white font-medium">{project.timeline}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`w-full aspect-video rounded-3xl overflow-hidden mb-20 border border-white/10 shadow-2xl relative group ${
            showFullDojoyHero ? 'bg-black/40 p-2 md:p-4' : ''
          }`}
        >
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
           <img 
             src={project.image} 
             alt={project.title} 
             className={showFullDojoyHero ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}
           />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                The Challenge
              </h2>
              
              {project.techExplanation && (
                <p className="text-zinc-300 text-lg leading-relaxed font-light whitespace-pre-line mb-8">
                  {project.techExplanation}
                </p>
              )}

              {project.id === 'song-platform' && project.imageBeforeSolution ? (
                <div className="mt-12 space-y-12">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
                    <div className="w-full min-w-0 lg:flex-[1.7]">
                      <p className="text-zinc-300 text-lg leading-relaxed font-light whitespace-pre-line">
                        {songPlatformUpperChallengeText}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`w-full min-w-0 lg:flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-xl ${
                        showFullVerticalBeforeSolution ? 'bg-black/40 p-1 md:p-2' : 'aspect-video'
                      }`}
                    >
                      <img
                        src={project.imageBeforeSolution}
                        alt="Song Platform Strategy and Execution"
                        className={
                          showFullVerticalBeforeSolution ? 'w-full h-auto object-contain' : 'w-full h-full object-cover'
                        }
                      />
                    </motion.div>
                  </div>
                  {songPlatformLowerParagraph && (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
                      <div className="w-full min-w-0 lg:flex-[1.7]">
                        <p className="text-zinc-300 text-lg leading-relaxed font-light whitespace-pre-line">
                          {songPlatformLowerParagraph}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full min-w-0 lg:flex-1 overflow-hidden border border-white/10 shadow-xl aspect-[4/3]"
                      >
                        <img
                          src="/images/SongPlatform3.jpg"
                          alt="Song Platform space overview"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <p className="text-zinc-300 text-lg leading-relaxed font-light whitespace-pre-line">
                    {project.challenge}
                  </p>

                  {project.id === 'gen-z-coliving' && project.image3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mt-12 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black/40 p-2 md:p-4"
                    >
                      <img src={project.image3} alt="Localization strategy detail" className="w-full h-auto object-contain" />
                    </motion.div>
                  )}

                  {/* Mid-Article Image - Placed before Solution */}
                  {project.imageBeforeSolution && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`mt-12 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl ${
                        showFullVerticalBeforeSolution ? 'bg-black/40 p-2 md:p-4' : 'aspect-video'
                      }`}
                    >
                      <img
                        src={project.imageBeforeSolution}
                        alt="Song Platform Strategy and Execution"
                        className={
                          showFullVerticalBeforeSolution ? 'w-full h-auto object-contain' : 'w-full h-full object-cover'
                        }
                      />
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                The Solution
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed font-light whitespace-pre-line">
                {project.solution}
              </p>
              
              {/* Secondary Image - Placed after Solution */}
              {project.image2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`mt-12 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl ${
                    showFullVerticalImage2 ? 'bg-black/40 p-2 md:p-4' : 'aspect-video'
                  } ${enlargeSongPlatform4 ? 'lg:w-[150%] lg:max-w-none lg:-ml-[25%]' : ''}`}
                >
                  <img
                    src={project.image2}
                    alt="Solution detail"
                    className={showFullVerticalImage2 ? 'w-full h-auto object-contain' : 'w-full h-full object-cover'}
                  />
                </motion.div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Key Impact
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed font-light mb-6 whitespace-pre-line">
                {project.impact}
              </p>
              <div className="flex items-center gap-2 text-orange-400 font-bold">
                 <CheckCircle size={20} />
                 <span>Goal Exceeded</span>
              </div>
            </motion.div>

            {/* Tertiary Image - Placed after Impact */}
            {project.image3 && project.id !== 'gen-z-coliving' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <img src={project.image3} alt="Impact detail" className="w-full h-full object-cover" />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 sticky top-32"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-white/5 text-zinc-300 text-sm rounded-lg border border-white/5 hover:border-orange-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
        
        {/* Next Project Nav */}
        <div className="mt-32 border-t border-white/10 pt-12 flex justify-between items-center">
            <Link to="/work" className="text-zinc-500 hover:text-white transition-colors">
              &larr; All Projects
            </Link>
        </div>
      </div>
    </div>
  );
};
