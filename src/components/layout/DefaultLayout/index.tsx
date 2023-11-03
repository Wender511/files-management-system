import  Header  from '../../pages/Header';
import { ReactNode } from 'react';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col'>
      {/* <AdminHeader></AdminHeader> */}
      <Header></Header>
      <main className='container my-4 w-full'>{children}</main>
    </div>
  );
};

export default DefaultLayout;
