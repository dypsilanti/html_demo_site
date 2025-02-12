const About = () => {
    return (
      <section id="about" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-black text-3xl">About Us</h2>
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
                <h5 className="text-lg text-gray-600 font-semibold">{index === 0 ? "Customer service" : index === 1 ? "Years of experience" : "Community focused"}
                </h5>
                <p className="text-gray-600">{index === 0 ? "We aim to please!" : index === 1 ? "You wouldn't believe it!" : "Gotta lift up the homies."}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    )};

export default About;
