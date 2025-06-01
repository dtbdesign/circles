import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-100 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="w-full aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-xl">
          {/* This would be replaced with an actual video embed */}
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1.5"></div>
              </div>
              <p className="text-white text-lg">Your Video Content Here</p>
              <p className="text-slate-400 text-sm mt-2">Replace this with your actual video embed code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;