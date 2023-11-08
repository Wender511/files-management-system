import { ReactNode } from 'react';

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <main className='container my-4 w-full'>{children}</main>
    </div>
  );
};

export default LoginLayout;