import Navbar from './components/Navbar'
import Header from './components/Header'


export default function Home() {
  
  return (

    <>
    <body>
    
    <div>
      <Navbar />
    </div>

    <div>
      <Header />
    </div>

      <section id="services" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["gpf-craig-gleason.jpg", "gpf-final-fantasy.jpg", "gpf-waylon-thornton.jpg"].map((image, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={`images/${image}`} alt="Frame" className="w-full" />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">{index === 0 ? "Custom Frames" : index === 1 ? "Ready-Made Frames" : "Frame Restoration"}</h5>
                  <p className="text-gray-600">{index === 0 ? "We offer a wide variety of custom frames to fit any picture or artwork." : index === 1 ? "Choose from our selection of ready-made frames in various styles and sizes." : "We provide professional frame restoration services to bring your old frames back to life."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Customer service", "Years of experience", "Community focused"].map((title, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={`images/${["gpf-final-fantasy.jpg", "gpf-waylon-thornton.jpg", "gpf-craig-gleason.jpg"][index]}`} alt="About" className="w-full" />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">{title}</h5>
                  <p className="text-gray-600">{index === 0 ? "We aim to please!" : index === 1 ? "You wouldn't believe it!" : "Gotta lift up the homies."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 bg-blue-600 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <img src="images/gpf-brett-suzanne.jpg" className="w-full mb-4" alt="GPF Owners Brett & Suzanne" />
            <p><strong>Email</strong> - <a href="mailto:gainesvillepictureframers@gmail.com" className="underline">gainesvillepictureframers@gmail.com</a></p>
            <p><strong>Phone</strong> - 555-555-5555</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Directions</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.465932207433!2d-82.3223026246698!3d29.677268375110557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a4148b910725%3A0x991843478458f118!2sN%20Main%20St%2C%20Gainesville%2C%20FL!5e0!3m2!1sen!2sus!4v1737398904962!5m2!1sen!2sus" width="100%" height="250" className="border-0" loading="lazy"></iframe>
            <p><strong>Address</strong> - 123 Main St, Gainesville, FL 32601</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We're Working On</h2>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/gnvpictureframers/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
          </div>
        </div>
      </section>
      </body>
    </>
  );
}
