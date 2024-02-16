import classNames from "classnames"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import { useState } from "react"

type Props = {
    children:React.ReactNode
}

const Layout : React.FC<Props> = ({children}) => {

    const [leftRightToggle,setLeftRIghtToggle] = useState(false)

  return (
    <div className={classNames("flex",leftRightToggle && 'flex-row-reverse')}>
        <div>
            <SideBar/>
        </div>
        <div>
            <Navbar/>
            <div className="bg-gray-100 w-[calc(100vw-240px)] h-[calc(100vh-60px)] ">
            {
                children
            }  
                </div>                      
        </div>
        <p onClick={()=>setLeftRIghtToggle(prev=>!prev)} className={classNames("text-green-600 cursor-pointer bg-white shadow-lg rotate-90 w-fit h-fit px-2 absolute right-0 top-[50%] bottom-[50%]",leftRightToggle && 'left-0 right-[100%]')}>
            {
                leftRightToggle ? 'LTR' : 'RTR'
            }
        </p>
    </div>
  )
}

export default Layout