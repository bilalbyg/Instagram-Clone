import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <>
        <Header />
        <div className='px-72'><Outlet /></div>
        
    </>
  )
}
