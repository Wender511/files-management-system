
import { useState } from "react";
import FileList from "src/components/FileList";
import { FileData } from "src/interface/file";

export const fileData: FileData[] = [
    {
        id: "1",
        name: "example_file.txt",
        owner: "Bruno Fernandes",
        department: "IT Department",
        status: "Active",
        link: "https://example.com/files/12345"
      },
    {
        id: "2",
        name: "result_file.txt",
        owner: "Harry Maguire",
        department: "IT Department",
        status: "Active",
        link: "https://example.com/files/1"
      }
]
    
const File = () => {

const [file, setFile] = useState<FileData[]>(fileData);
    return ( 
        <div className='flex w-full items-start gap-5'>
            <div className="w-[350px] h-[900px] bg-red-600 text-white"><p className="text-8xl">fillter</p></div>
        <FileList fileFake = {file}></FileList>
      </div>
     );
}
 
export default File;