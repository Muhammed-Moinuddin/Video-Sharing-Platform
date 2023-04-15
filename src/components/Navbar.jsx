import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import mainLogo from'../utils/movietube.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
    direction='row'
    alignItems='center'
    p={2}
    sx={{position: 'sticky', background: '#000022', top: 0, justifyContent:'space-between'}}
    >
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img src={mainLogo} alt="logo" height={35}/>
        </Link>   
        <SearchBar/>
    </Stack>
  )
}

export default Navbar