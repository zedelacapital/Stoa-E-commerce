import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Container, FormControlLabel, IconButton, 
    List, ListItem, styled, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import stoaLogoLight from "../../images/stoalogo.png";
import stoaLogoDark from "../../images/stoalogoDark.png";
import { useAppSelector } from "../store/configureStore";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WarehouseIcon from '@mui/icons-material/Warehouse';

// const midLinks = [
//     { title: 'Products', path: '/catalog' },
//     { title: 'about', path: '/about' },
//     { title: 'contact', path: '/contact' },
// ]

const rightLinks = [
    { title: 'Home', path: '/', img: WarehouseIcon },
    { title: 'Products', path: '/catalog',img:""  },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
    { title: 'logIn', path: '/login' },
    { title: 'register', path: '/register' },
]

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62 * 0.7,
    height: 34 * 0.7,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(5px)',
        '&.Mui-checked': {
            color: '#000',
            transform: 'translateX(15px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
        //   'dark' ? '#003892' : '#001e3c',
        width: 32 * 0.7,
        height: 32 * 0.7,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#000',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    const { basket } = useAppSelector(state => state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
    const backgroundColor = darkMode ? '#202229' : "#FFF";
    const logoimage = darkMode ? stoaLogoDark : stoaLogoLight;
    const logoheight = darkMode ? "17px" : "17px";
    const itemcolor = darkMode ? "#fff" : "#465158";
    const itemActiveColor = darkMode ? "#fff" : "#465158";

    const navStyles = {
        //
        textDecoration: 'none',
        color: itemcolor,
        typography: "h6",
        fontSize: "13px",
        '&:hover': {
            color: 'grey.500',
        },
        '&.active': {
            color: itemActiveColor,
            fontWeight: 'bold',
            // fontStyle: 'italic'grey.500,
            textDecoration: "underline",
            textUnderlineOffset: '27px',
        }
    }
    return (
        
        <AppBar style={{ backgroundColor: backgroundColor }} position='static' sx={{ mb: 4 }}>
          <Container maxWidth="lg">  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    
                    <Typography variant="h6" component={NavLink}
                        to='/'
                        sx={navStyles}>
                        <img style={{ marginLeft: "-21px", height: logoheight, display: 'flex', 
                        justifyContent: 'space-between', alignItems: 'center' }} src={logoimage} alt="react logo" />
                    </Typography>
                </Box>
                <Box display='flex'>
                    <List sx={{ display: 'flex}' }}>
                        {rightLinks.map(({ title, path, img }) => (
                         
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                //sx={{ color: 'inherit' }}
                                sx={navStyles}
                            >   <Typography fontFamily="Work Sans" fontWeight={"500"} >
                                {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
                                </Typography>
                            </ListItem>
                          
                        ))}
                        <ListItem>
                            </ListItem>
                           
                            <IconButton component={Link} to='/basket' size='small' edge='start' color="default" sx={{ mr: 1 }}>
                            <Badge
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                badgeContent={itemCount} color="primary"></Badge>
                            <ShoppingCart />
                        </IconButton>
                        <IconButton component={Link} to='/login' size='small' edge='start' color="default" sx={{ mr: 2 }}>
                            <AccountCircleIcon />
                        </IconButton>
                            <FormControlLabel sx={{ mr: -3 }} checked={darkMode} onClick={handleThemeChange}
                                control={<MaterialUISwitch />} label/>       
                    </List>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    )
}

