import Link from 'next/link';

import MainNav from './main-nav';
import Container from './ui/container';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Container>
      <div className='p-4 flex justify-between items-center'>
        <Link
          href='/'
          className='font-bold uppercase leading-tight tracking-tighter'
        >
          Pet Adoption
        </Link>
        <MainNav />
      </div>
    </Container>
  );
};

export default Navbar;
