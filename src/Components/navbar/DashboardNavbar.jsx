import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
function DashboardNavbar() {
  const navigate = useNavigate()
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
  

  const LogOut = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }
    return (
      <div className="max-h-[768px] w-full bg-light-blue-900">
        <Navbar className="sticky top-0 z-10 h-max max-w-full  rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-indigo-900">
            <Typography
              as="a"
              href="#"
              className="ml-8 cursor-pointer py-1.5 font-serif text-3xl"
            >
              SheSquad
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block"></div>
              <div className="flex items-center gap-x-1">
                  <Button
                  onClick={LogOut}
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Log out</span>
                  </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
           
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    )
  }
export default DashboardNavbar