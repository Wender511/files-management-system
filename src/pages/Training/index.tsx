import { useState } from "react";
import { useSelector } from "react-redux";
import useTraining from "src/api/trainingApi";
import TrainingList from "./TrainingList";

const Training = () => {
    interface rootReducer {
        auth: boolean;
      }
      
        // 0 là nhân viên,  1 là duyệt
        const [role, setRole] = useState(0)
        const checkrole: any = useSelector((state: rootReducer) => state.auth);
        const {data: trainingData, mutate, error} = useTraining();
        
        if(trainingData && trainingData.data){
          return <TrainingList data = {trainingData.data} mutate={mutate}/>
        }
      return(<></>)
}
 
export default Training;