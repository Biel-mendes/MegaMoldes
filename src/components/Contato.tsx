// Contato.tsx
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const endereco = 'R. Ahmad El Hind, 166 - Jardim Matarazzo, São Paulo - SP, 03811-070';

const info = [
  { icone: <EmailIcon />, label: 'E-mail', valor: 'megamoldes@outlook.com.br', href: 'mailto:megamoldes@outlook.com.br' },
  { icone: <PhoneIcon />, label: 'Telefone / WhatsApp', valor: '+55 11 97647-8548', href: 'https://wa.me/5511976478548' },
  { icone: <PlaceIcon />, label: 'Endereço', valor: endereco },
];

const redes = [
  { icone: <WhatsAppIcon />, nome: 'WhatsApp', href: 'https://wa.me/5511976478548' },
  { icone: <EmailIcon />, nome: 'E-mail', href: 'mailto:megamoldes@outlook.com.br' },
  { icone: <InstagramIcon />, nome: 'Instagram', href: 'https://instagram.com/SEU_PERFIL' },
];

function Contato() {
  return (
    <Box
      component="section"
      id="contato"
      sx={[
        { py: { xs: 6, md: 8 }, color: '#fff', bgcolor: 'primary.dark' },
        (theme) => theme.applyStyles('dark', { bgcolor: '#070c14' }),
      ]}
    >
      <Container
        maxWidth="lg"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}
      >
        <Box
          component="iframe"
          title="Localização da Mega Moldes"
          src={`https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`}
          loading="lazy"
          sx={{ width: '100%', height: { xs: 240, md: 300 }, border: 0, borderRadius: 3 }}
        />

        <Box sx={{ display: 'grid', gap: 2.5 }}>
          {info.map((i) => (
            <Box key={i.label} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box sx={{ color: 'secondary.main', mt: 0.25 }}>{i.icone}</Box>
              <Box>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, lineHeight: 1.4, display: 'block' }}>
                  {i.label}
                </Typography>
                {i.href ? (
                  <Link href={i.href} color="inherit" underline="hover" target="_blank" rel="noopener">
                    {i.valor}
                  </Link>
                ) : (
                  <Typography>{i.valor}</Typography>
                )}
              </Box>
            </Box>
          ))}

          <Box sx={{ display: 'flex', gap: 1.5, mt: 1 }}>
            {redes.map((r) => (
              <IconButton
                key={r.nome}
                href={r.href}
                target="_blank"
                rel="noopener"
                aria-label={r.nome}
                sx={{
                  color: '#fff',
                  bgcolor: 'rgba(255,255,255,.12)',
                  transition: 'all .25s ease',
                  '&:hover': { bgcolor: 'secondary.main', transform: 'translateY(-3px)' },
                }}
              >
                {r.icone}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contato;