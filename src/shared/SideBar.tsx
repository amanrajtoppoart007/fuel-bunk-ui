import logo from '../assets/logo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate()

    const routeFn = (menu:string) => {
        const route = menu === 'Dashboard' ? '/' : `/${menu.toLowerCase().replace(' ','-')}`
        navigate(route)
    }
  return (
    <div className="h-screen bg-gradient-to-b from-yellow-500 to-yellow-100">
        <img width={100} src={logo} alt="" />
        <div className='flex flex-col gap-y-5 mt-10 px-4'>
            {
                sideMenus.map((menu)=>(
                    <div onClick={()=>routeFn(menu.menuItem)}  className='flex items-center cursor-pointer w text-white font-bold justify-between w-52 gap-x-2'>
                        <div className='flex items-center gap-x-2'>
                        <div>
                        {
                            menu.icon
                        }
                        </div>
                        <p>
                        {
                            menu.menuItem
                        }                            
                        </p>
                        </div>
                        {
                            menu.menuItem !== 'Dashboard' && <ArrowForwardIosOutlinedIcon className='!w-4'/>
                        }
                  </div>
                ))
            }
        </div>
    </div>
  )
}

export default SideBar

type sideMenuProps = {
    icon:any;
    menuItem:string;
}

const sideMenus : sideMenuProps[] = [
    {
        icon:<HomeOutlinedIcon/>,
        menuItem:'Dashboard'
    },
    {
        icon:<Inventory2OutlinedIcon/>,
        menuItem:'Product'
    },
    {
        icon:<Inventory2OutlinedIcon/>,
        menuItem:'Tanks'
    },
    {
        icon:<PermIdentityOutlinedIcon/>,
        menuItem:'Employee'
    },
    {
        icon:<Inventory2OutlinedIcon/>,
        menuItem:'DUS'
    },
    {
        icon:<TodayOutlinedIcon/>,
        menuItem:'Day Start'
    },
    {
        icon:<TodayOutlinedIcon/>,
        menuItem:'Day End'
    },
    {
        icon:<TodayOutlinedIcon/>,
        menuItem:'All Reconcillation'
    },

]