import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import SearchBox from "../SearchBox";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import Users from '../Users';

const Header = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setisOpennotificationDrop(true)
  }
  const handleClosenotificationsDrop = () => {
    setisOpennotificationDrop(false)
  }
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/*logo wrapper*/}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo"><img src={logo} />
                <span className="ml-2">EMT</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3"><MdMenuOpen /></Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center part3 pl-4 justify-content-end">
              <Button className="rounded-circle mr-3"><MdLightMode /></Button>

              <Button className="rounded-circle mr-3"><BsCartCheck />

              </Button>
              <Button className="rounded-circle mr-3"><MdOutlineMailOutline /></Button>

              <div className='dropdownWrapper position-relative'>
                <Button className="rounded-circle mr-3" onClick={handleOpennotificationsDrop}><IoIosNotificationsOutline /></Button>
                <Menu
                  anchorEl={isOpennotificationDrop}
                  className='notifications dropdown-list'
                  id="notifications"
                  open={openNotifications}
                  onClose={handleClosenotificationsDrop}
                  onClick={handleClosenotificationsDrop}

                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <div className='head pl-3 pb-0'>
                    <h4>Orders(12)</h4>
                  </div>
                  <Divider className='mb-3' />

                  <div className='scroll'>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <div className='d-flex' >


                        <div>
                          <Users />

                        </div>
                        <div className='dropdownInfo' >
                          <h4>
                            <span>
                              <b>Divya Deshmukh</b>
                              added to his favorite list <b>leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='
                        text-sky
                        '>
                            Few Seconds Ago
                          </p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className='pl-1 pr-1 pt-1 pb-1 w-100'>
                    <Button className='btn-blue w-100'>View all Notifications</Button>

                  </div>
                </Menu>
              </div>


              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                  <Users />

                  <div className="userInfo">
                    <h4>Abhishek Deshmukh</h4>
                    <p className="mb-0">@abhishek</p>
                  </div>

                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}

                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >


                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;