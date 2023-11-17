import { useState } from "react";
import { useSelector } from "react-redux";
import useDevice from "src/api/deviceApi";
import DeviceList from "./Devicelist";

const Device = () => {
    interface rootReducer {
        auth: boolean;
      }
      
        // 0 là nhân viên,  1 là duyệt
        const [role, setRole] = useState(0)
        const checkrole: any = useSelector((state: rootReducer) => state.auth);
        const {data: deviceData, mutate, error} = useDevice();
        if(deviceData && deviceData.data){
          return <DeviceList data = {deviceData.data} mutate={mutate}/>
        }
      return(<></>)
}
 
export default Device;