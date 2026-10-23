import { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItemButton, ListItemText,
} from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from '../assets/mega-moldes-logo-transparente.png';
import LogoBranca from '../assets/mega-moldes-logo-transparente-texto-branco.png';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Contato', href: '#contato' },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const { mode, systemMode, setMode } = useColorScheme();
  const current = mode === 'system' ? systemMode : mode;
  const toggleTema = () => setMode(current === 'dark' ? 'light' : 'dark');

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          minHeight: { xs: 68, md: 88 },
          gap: 2,
        }}
      >
        <Box component="a" href="#inicio" sx={{ display: 'flex', flexShrink: 0 }}>
          <Box
            component="img"
            src={current === 'dark' ? LogoBranca : Logo}
            alt="Mega Moldes"
            sx={{ height: { xs: 52, md: 68 }, borderRadius: 1 }}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', gap: 2, alignItems: 'center' }}>
          {links.map((l) => (
            <Button
              key={l.href}
              href={l.href}
              color="inherit"
              sx={{
                position: 'relative',
                fontSize: 16,
                fontWeight: 500,
                transition: 'color .2s ease',
                '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 16, right: 16, bottom: 4,
                  height: 2,
                  bgcolor: 'secondary.main',
                  transform: 'scaleX(0)',
                  transition: 'transform .25s ease',
                },
                '&:hover::after': { transform: 'scaleX(1)' },
              }}
            >
              {l.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 'auto', md: 0 } }}>
          <IconButton
            onClick={toggleTema}
            aria-label="Alternar tema"
            sx={{ transition: 'transform .4s ease', '&:hover': { transform: 'rotate(30deg)' } }}
          >
            {current === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240 }}>
          {links.map((l) => (
            <ListItemButton key={l.href} component="a" href={l.href} onClick={() => setOpen(false)}>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;