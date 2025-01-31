import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image src="/gpf-web-large.png" alt="Logo" width={360} height={0} className="p-4" />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="#about" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
        </div>
        <button className="md:hidden p-2 text-gray-700">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
