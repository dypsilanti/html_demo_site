const Services = () => {
    return (
        <section id="services" className="py-10 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-black text-3xl">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["gpf-craig-gleason.jpg", "gpf-final-fantasy.jpg", "gpf-waylon-thornton.jpg"].map((image, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img 
                  src={`${image}`} 
                  alt="Frame" 
                  className="w-full" 
                  style={{ height: index === 0 ? '500px' : index === 1 ? '500px' : '500px', objectFit: 'cover'}} 
                />
                <div className="p-4">
                  <h5 className="text-lg text-gray-600 font-semibold">{index === 0 ? "Custom Frames" : index === 1 ? "Ready-Made Frames" : "Frame Restoration"}</h5>
                  <p className="text-gray-600">{index === 0 ? "We offer a wide variety of custom frames to fit any picture or artwork." : index === 1 ? "Choose from our selection of ready-made frames in various styles and sizes." : "We provide professional frame restoration services to bring your old frames back to life."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    )};

export default Services;

