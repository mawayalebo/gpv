import Carousel from "./Carousel";
import Header from "./Header";


function Layout({children}: any) {
    return (   
        <div>
            <Header/>
            <Carousel/>
            {children}
        </div>
      );
}

export default Layout;