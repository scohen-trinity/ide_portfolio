import { ArrowLeft, ArrowRight, Search } from 'lucide-react'
import './TopBar.css'

function TopBar() {
    return (
        <div className='top-bar'>
            <ArrowLeft className='arrows' />
            <ArrowRight className='arrows' />
            <div className='search-bar'>
                <Search />
                <span className='search-bar-text'>sams_portfolio_ide</span>    
            </div>
        </div>
    )
}
export default TopBar