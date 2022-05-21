const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Strava Strive</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create">create</a>
                <a href="/table">table</a>
                <a href="/stravaauth">stravaauth</a>
                <a href="/strava">strava</a>
                </div>
        </nav>
    );
}
 
export default Navbar;