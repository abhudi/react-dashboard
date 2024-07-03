import DashboardBox from "./components/dashboardBox";
import { FaUserSecret } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";


import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor': 'transparent',
  'chartArea': { 'width': '100%', 'height': '100%' }
};
const Dashboard = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setshowBy] = useState('');
  const [showBysetCatBy, setCatBy] = useState('');
  const [showbrandBy, setbrandBy] = useState('');
  const [showsearchBy, setsearchBy] = useState('');

  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 48;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="right-content w-100">
        {/* <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd"
          >Dashboard</h3>

        </div> */}
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#e1eec3", "#f05053"]} icon={<FaUserSecret />} grow={true} />
              <DashboardBox color={["#ACB6E5", "#74ebd5"]} icon={<FaCartArrowDown />} />
              <DashboardBox color={["#74ebd5", "#ACB6E5"]} icon={<FaShoppingBag />} />
              <DashboardBox color={["#f05053", "#e1eec3"]} icon={<BsStars />} />

            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <div className="ml-auto">

                  <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical /></Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                      },
                    }}
                  >

                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoIosTimer /> Last Year
                    </MenuItem>

                  </Menu>
                </div>

              </div>
              <h3 className="text-white font-weight-bold">
                $3,787,681.00
              </h3>
              <p>$3,578.90 in last month</p>


              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}

              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd"
          >Best Selling Products</h3>



          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  labelId="demo-simple-select-helper-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBysetCatBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>BRAND BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showbrandBy}
                  onChange={(e) => setbrandBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>SEARCH BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showsearchBy}
                  onChange={(e) => setsearchBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>



          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex productBox">
                      <div className="info">
                        <h6>Tops and skirt for Female....</h6>
                        <p>Shirts and Dress</p>
                      </div>
                    </div>
                  </td>
                  <td>Men's</td>
                  <td>Richman</td>
                  <td><del className="old">$21.00</del>
                    <span className="new text-danger">$21.00</span></td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>390</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>









              </tbody>

            </table>
          </div>
        </div>



      </div>
    </>
  )
}
export default Dashboard;