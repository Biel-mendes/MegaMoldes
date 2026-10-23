import { Box, Container, Typography } from '@mui/material';

const etapas = ['Projeto', 'Usinagem', 'Ferramentaria', 'Injeção'];

function Steps() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff' }}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}
      >
        {etapas.map((nome, i) => (
          <Typography
            key={nome}
            sx={{
              py: 2.5,
              textAlign: 'center',
              fontWeight: 600,
              fontSize: { xs: 14, md: 16 },
              borderRight: { xs: i % 2 === 0 ? 1 : 0, md: i < 3 ? 1 : 0 },
              borderBottom: { xs: i < 2 ? 1 : 0, md: 0 },
              borderColor: 'rgba(255,255,255,.2)',
            }}
          >
            {nome}
          </Typography>
        ))}
      </Container>
    </Box>
  );
}

export default Steps;