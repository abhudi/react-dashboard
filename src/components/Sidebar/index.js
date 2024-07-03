import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io';



const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  }
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 0 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                <span className='icon'>      <MdDashboard /></span>
                Dashboard
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
              <span className='icon'>      <FaProductHunt /></span>
              Products
              <span className='arrow'><FaAngleRight /></span>
            </Button>
            <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
              <ul className='submenu'>
                <li><Link to="#">Product List</Link></li>
                <li><Link to="#">Product View</Link></li>
                <li><Link to="#">Upload Product</Link></li>
              </ul>
            </div>

          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                <span className='icon'>      <FaCartPlus /></span>
                Orders
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li> <Link to="/">
            <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
              <span className='icon'>      <RiMessage2Fill /></span>
              Messages
              <span className='arrow'><FaAngleRight /></span>
            </Button>
          </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                <span className='icon'>      <IoNotifications /></span>
                Notifications
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 5 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                <span className='icon'>      <FaFileInvoice /></span>
                Invoices
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 6 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                <span className='icon'>      <IoSettings /></span>
                Settings
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 7 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
                <span className='icon'>      <IoChatbubbles /></span>
                Chat
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 8 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                <span className='icon'>      <IoMdMailUnread /></span>
                Mail
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 9 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                <span className='icon'>      <SlCalender /></span>
                Calender
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 10 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(10)}>
                <span className='icon'>      <FaTasks /></span>
                Tasks
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 11 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(11)}>
                <span className='icon'>      <FaBlog /></span>
                Blog
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 12 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(12)}>
                <span className='icon'>      <MdContactEmergency /></span>
                Contact
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 13 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(13)}>
                <span className='icon'>      <MdCampaign /></span>
                Campaign
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 14 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(14)}>
                <span className='icon'>      <IoLogOut /></span>
                Logout
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 15 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(15)}>
                <span className='icon'>      <IoShareSocialSharp /></span>
                Social
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>
          </li>
        </ul>


        <br />
        <div className='logoutWrapper'>
          <div className='logoutBox'>
            <Button variant='contained'><IoMdLogOut /> Logout</Button>
          </div>
        </div>
      </div></>
  )
}

export default Sidebar;