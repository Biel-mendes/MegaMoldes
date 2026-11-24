// BotaoContato.tsx
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const numero = '5511976478548';
const mensagem = 'Olá! Vim pelo site e gostaria de um orçamento.';

function BotaoContato() {
  return (
    <Tooltip title="Fale conosco no WhatsApp" placement="left">
      <Fab
        component="a"
        href={`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 24 },
          bottom: { xs: 16, md: 24 },
          zIndex: (t) => t.zIndex.speedDial,
          bgcolor: '#25D366',
          color: '#fff',
          transition: 'transform .25s ease, background-color .25s ease',
          '&:hover': { bgcolor: '#1ebe5b', transform: 'scale(1.1)' },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </Fab>
    </Tooltip>
  );
}

export default BotaoContato;