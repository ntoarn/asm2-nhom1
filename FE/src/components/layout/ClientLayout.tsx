import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Banner from '../banner/Banner'

const ClientLayout = () => {
  return (
    <div>
      <Header/>
      <Banner />
        <main className='container'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default ClientLayout
