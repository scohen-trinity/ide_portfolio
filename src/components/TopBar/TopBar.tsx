import './TopBar.css'

function TopBar() {
    return (
        <div className='top-bar'>
            <span className="material-symbols-outlined arrows">west</span>
            <span className="material-symbols-outlined arrows">east</span>
            <div className='search-bar'>
                <span className="material-symbols-outlined search-icon">search</span>
                <span className='search-bar-text'>sams_portfolio_ide</span>    
            </div>
            <div className='splitscreens'>
                <span className="material-symbols-outlined">splitscreen_left</span>
                <span className="material-symbols-outlined">splitscreen_bottom</span>
            </div>
        </div>
    )
}
export default TopBar