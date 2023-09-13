import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <nav className='flex justify-between'>
        <p>Logo</p>
        <UserButton afterSignOutUrl='/' />
      </nav>
    </div>
  );
}
