import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../assets/styles.css';

export default function Layout() {
 return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
