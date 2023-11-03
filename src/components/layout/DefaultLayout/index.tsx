import { ReactNode } from 'react';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col'>
      {/* <AdminHeader></AdminHeader> */}
      <main className='container my-4 w-full'>{children}</main>
    </div>
  );
};

export default DefaultLayout;
