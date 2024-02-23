import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className='min-h-lvh min-h-svh flex flex-col justify-between'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;