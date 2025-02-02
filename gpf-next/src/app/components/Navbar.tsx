import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
  <div className="container mx-auto flex flex-col md:flex-row items-center  content-center justify-between p-4">
    <div className="flex items-center space-x-4">
      <Image src="/gpf-web-large.png" alt="Logo" width={360} height={0} className="py-4 ps-11 md:ps-0 pe-0 md:w-[18rem]" />
    </div>
    <div className="space-y-4 md:space-y-0 space-x-6">
      <Link href="#services" className="text-gray-700 hover:text-gray-900">Services</Link>
      <Link href="#about" className="text-gray-700 hover:text-gray-900">About Us</Link>
      <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
