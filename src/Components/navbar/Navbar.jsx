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
import { jwtDecode } from "jwt-decode";

export function StickyNavbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token);

  const [openNav, setOpenNav] = React.useState(false);

  const LogOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={'/'} className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {decoded.category ? (
          <Link to={'/expert/chat'} className="flex items-center">
            Message
          </Link>
        ) : (<Link to={'/chat'} className="flex items-center">
          Message
        </Link>)}


      </Typography>
      <Menu>
        <MenuHandler>
          <Avatar className="h-7 w-7 border border-gray-900" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        </MenuHandler>
        {token ? (<MenuList>
          <Link to={decoded.category ? '/expertprofile' : 'userprofile'}> <MenuItem>My Profile</MenuItem></Link>
          <MenuItem onClick={LogOut}>Log out</MenuItem>
        </MenuList>) : ''}
      </Menu>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-full">
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
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {token ? null : (
                <React.Fragment>
                  <Link to='/login'>
                    <Button variant="text" size="sm" className="hidden lg:inline-block">
                      <span>Log in</span>
                    </Button>
                  </Link>
                  <Link to='/register'>
                    <Button variant="text" size="sm" className="hidden lg:inline-block">
                      <span>Register</span>
                    </Button>
                  </Link>
                </React.Fragment>
              )}

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
          {navList}
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