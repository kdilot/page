import { useRouter } from 'next/router';
import Github from './images/github.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const router = useRouter();
  return (
    <div className="bg-slate-900 text-white flex w-full items-center justify-between p-3 shadow-lg shadow-slate-100/30">
      <h1 onClick={() => router.push('/')} className="cursor-pointer">
        Front-End
      </h1>
      <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] cursor-pointer">
        <Github />
      </div>
    </div>
  );
}

export default Header;
