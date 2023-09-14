'use client';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = ({}) => {
  const pathname = usePathname();

  const routes = [
    { href: '/pets', label: 'Pets', active: pathname === '/pets' },
    {
      href: '/favorites',
      label: 'Favorites',
      active: pathname === '/favorites',
    },
    { href: '/about-us', label: 'About us', active: pathname === '/about-us' },
  ];
  return (
    <nav className='flex items-center justify-end gap-x-8'>
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors  hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}

      <UserButton afterSignOutUrl='/' />
    </nav>
  );
};

export default MainNav;
