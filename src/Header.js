import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <div className='leftHeader'>
                <img className='logo' src='https://cdn2.vectorstock.com/i/1000x1000/84/91/letter-f-t-simple-thread-needle-curves-design-logo-vector-35488491.jpg' alt='Logo'></img>
                <div className='categories'>
                    <div className='men'>Men</div>
                    <div className='women'>Women</div>
                    <div className='homeLiving'>Home&Living</div>
                </div>
            </div>
            <div className='rightHeader'>
                <div className='searchBar'>
                    <SearchIcon className='searchIcon' />
                    <input placeholder='Search' className='search' type={"text"} />
                </div>
                <div className='helloUser'>Hello, Guest</div>
                <img className='basketIcon' src='https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-shopping-bag-icon-png-image_889429.jpg'></img>
                
            </div>
            
        </div>
    )
}

export default Header