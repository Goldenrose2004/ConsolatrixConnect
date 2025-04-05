import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#001B4D] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Your School Policy<br />Handbook, Digitized
            </h1>
            <p className="text-gray-300 mb-6 text-sm">
              ConsolatrixConnect is a school information management platform that helps schools manage 
              their policies in a user-friendly, easy to use platform. Stay informed, stay engaged, and make 
              campus life simpler.
            </p>
            <button className="bg-white text-[#001B4D] px-6 py-2 rounded text-sm font-medium hover:bg-gray-100">
              Access Handbook
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded overflow-hidden">
              <img
                src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/488600556_9985388081480890_4948729998548415020_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=536f4a&_nc_eui2=AeE6ncS-Ez-HpvfoKEyLIFIvFDJBQwK2vtAUMkFDAra-0FIXSkwTG_f94WZebgtjSKbBWCPXTT8NoTszPWaMN1wo&_nc_ohc=2OA9_w30u8sQ7kNvwE98wOn&_nc_oc=AdnPBU_ulLC1IXHzRvF-hOVcZpBCFJvXkWaWNN3rpGp2bQdkUqgpdAIqLLBnNJD2EV0&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=nC5qNADhwhV66Io_JlhL-Q&oh=00_AYGRJdrvEzEVCinbdoDjodP3SCDNbyF_v9wbNAH1-7q0gg&oe=67F69E7B"
                alt="Consolatrix College of Toledo City"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 