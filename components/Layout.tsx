import Header from "./header";


function Layout({children}: any) {
    return (   
        <div>
            <Header/>
            {children}
        </div>
      );
}

export default Layout;