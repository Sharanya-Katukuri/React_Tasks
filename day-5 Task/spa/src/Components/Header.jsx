function Header(){
    return(
      
        <header className="header">
            <div className="navbar-left">
               <a href="#" className="logo"><img src="/logo.png" alt="" /></a>
                    <div class="search-box">
                        <img src="images/search.png" alt=""/>
                        <input type="text" placeholder="Search"/>
                    </div>      
            </div>
            <nav className="navbar-center">
                <ul>
                    <li><a href="#" className="active-link"><img src="/home.png" alt="" /><span>Home</span></a></li>
                    <li><a href="#"><img src="/network.png" alt="" /><span>My Network</span></a></li>
                    <li><a href="#"><img src="/jobs.png" alt="" /><span>Jobs</span></a></li>
                    <li><a href="#"><img src="/message.png" alt="" /><span>Messaging</span></a></li>
                    <li><a href="#"><img src="/notification.png" alt="" /><span>Notifications</span></a></li>

                    
                </ul>
                
            </nav>
            <div class="navbar-right">
            <div class="online">
                <img src="/me.jpeg" alt="" class="nav-profile-img"/>
            </div>
            
        </div>
        </header>
       
    )
}
export default Header;