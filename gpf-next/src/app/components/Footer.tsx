const Footer = () => {
    return (
      <section id="contact" className="py-10 bg-blue-600 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <img src="./gpf-brett-suzanne.jpg" className="w-full mb-4" alt="GPF Owners Brett & Suzanne" />
            <p><strong>Email</strong> - <a href="mailto:gainesvillepictureframers@gmail.com" className="underline">gainesvillepictureframers@gmail.com</a></p>
            <p><strong>Phone</strong> - 555-555-5555</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Directions</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.465932207433!2d-82.3223026246698!3d29.677268375110557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a4148b910725%3A0x991843478458f118!2sN%20Main%20St%2C%20Gainesville%2C%20FL!5e0!3m2!1sen!2sus!4v1737398904962!5m2!1sen!2sus" width="100%" height="250" className="border-0" loading="lazy"></iframe>
            <p><strong>Address</strong> - 123 Main St, Gainesville, FL 32601</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us on Social</h2>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/gnvpictureframers/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
          </div>
        </div>
      </section>
  )};

export default Footer;
  