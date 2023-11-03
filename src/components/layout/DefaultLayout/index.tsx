import  Header  from "../../pages/Header/index";
import { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}

export default DefaultLayout;
