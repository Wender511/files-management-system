import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filelist from "./Filelist";
import useFile, {fileApi} from "src/api/fileApi";
interface rootReducer {
  auth: boolean;
}

const Home = () => {
  // 0 là nhân viên,  1 là duyệt
  const [role, setRole] = useState(0)
  const checkrole: any = useSelector((state: rootReducer) => state.auth);
  const {data: fileData, mutate, error} = useFile();

  if(fileData && fileData.data.data){
    return <Filelist data = {fileData.data.data} mutate={mutate}/>
  }
return(<></>)
};

export default Home;
