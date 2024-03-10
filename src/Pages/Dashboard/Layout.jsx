import DashboardNavbar from '../../Components/navbar/DashboardNavbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { FooterWithSocialLinks } from '../Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <div className='h-screen grid grid-rows-[5rem] '>
        <div>
          <DashboardNavbar />
        </div>
        <div className='md:grid md:grid-cols-[18.7rem,1fr]'>
          <div className='invisible md:visible'>
            <Sidebar />
          </div>
          <div>
            <div className='h-full '>
              <Outlet />
            </div>
            <div>
            <div className=''><FooterWithSocialLinks/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
