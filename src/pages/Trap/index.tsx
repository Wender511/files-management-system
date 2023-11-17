import { useState } from "react";
import { useSelector } from "react-redux";
import useTrap from "src/api/trapApi";
import TrainingList from "./TrainingList";

const Trap = () => {
    interface rootReducer {
        auth: boolean;
      }
      
        // 0 là nhân viên,  1 là duyệt
        const [role, setRole] = useState(0)
        const checkrole: any = useSelector((state: rootReducer) => state.auth);
        const {data: trapData, mutate, error} = useTrap();
        
        if(trapData && trapData.data){
          return <TrainingList data = {trapData.data} mutate={mutate}/>
        }
      return(<></>)
}
 
export default Trap;