import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="bg-red-500 p-4">
        <div className="container ">
          <div className=" w-full flex justify-start items-center">
            <h1 className="text-white text-2xl font-semibold mr-[4px]">
                <div className="w-16 h-16 mr-2">
                    <img className="w-full h-full" src="https://imgt.taimienphi.vn/cf/Images/huy/2022/7/22/logo-manchester-united-4.png" alt="" />
                </div>
               
            </h1>
            <nav className="space-x-4">
              <Link to="/" className="text-white hover:underline">Trang chủ</Link>
              <Link to="/employees" className="text-white hover:underline">Trang nhân viên</Link>
              <a href="#" className="text-white hover:underline">Services</a>
              <a href="#" className="text-white hover:underline">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    );
}
 
export default Header;