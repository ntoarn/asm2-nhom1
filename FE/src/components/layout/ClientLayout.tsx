import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const ClientLayout = () => {
  return (
    <div>
      <Header/>
        <main className='container'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default ClientLayout
