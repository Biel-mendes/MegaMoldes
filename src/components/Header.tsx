import { Box, Container, Typography, Button, Chip } from '@mui/material';
import Foto1 from '../assets/Group 27 1.png';
import Foto2 from '../assets/Group 27 2.png';

function Hero() {
  return (
    <Box
      id="inicio"
      sx={{
        position: 'relative',
        minHeight: { xs: 560, md: 560 },
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gridTemplateRows: { xs: '1fr 1fr', md: '1fr' },
        }}
      >
        {[Foto1, Foto2].map((src) => (
          <Box
            key={src}
            component="img"
            src={src}
            alt=""
            sx={{ width: '100%', height: '100%', minHeight: 0, objectFit: 'cover', display: 'block' }}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(8, 24, 52, 0.6), rgba(8,24,52,.92))',
            md: 'linear-gradient(90deg, rgba(8,24,52,.88), rgba(8, 24, 52, 0.72))',
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 1.5 }}
        >
          Moldes · Ferramentaria · Injeção
        </Typography>
        <Typography
          component="h1"
          sx={{ fontSize: { xs: 32, md: 46 }, fontWeight: 700, lineHeight: 1.15, maxWidth: 700, mb: 2 }}
        >
          Soluções Industriais de Alta Performance
        </Typography>
        <Typography sx={{ fontSize: { xs: 16, md: 19 }, maxWidth: 620, opacity: 0.92, mb: 4 }}>
          Especialistas em usinagem de moldes para injeção, unindo ferramentaria e injeção de
          plástico para entregar peças precisas e sob medida.
        </Typography>
        <Button
          href="#orcamento"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontWeight: 700, px: 4, width: { xs: '100%', sm: 'auto' } }}
        >
          Faça Seu Orçamento
        </Button>
        <Box sx={{ mt: 3 }}>
          <Chip
            label="Desde 2016 · 10 anos de experiência"
            variant="outlined"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;