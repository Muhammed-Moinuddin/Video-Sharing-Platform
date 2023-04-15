import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';


const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

  return (
    <Paper 
    component="form"
    onSubmit={(e) => {
      e.preventDefault();
      if(searchTerm){
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
      }
    }}
    sx={{
        display: 'flex',
        borderRadius: 20,
        border: '2px solid #ff6700',
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5}
    }}
    >
    <input 
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}    
    />
    <IconButton type='submit' sx={{p : '10px' , color: '#ff6700'}}>
        <Search/>
    </IconButton>
    </Paper>
  )
}

export default SearchBar;