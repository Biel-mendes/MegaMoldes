import { Box, Container, Typography } from '@mui/material';
import FotoSobre from '../assets/image 12.png';

function Sobre() {
  return (
    <Box component="section" id="sobre" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: 28, md: 34 },
            fontWeight: 700,
            color: 'primary.main',
            mb: { xs: 4, md: 6 },
            '&::after': {
              content: '""',
              display: 'block',
              width: 56,
              height: 4,
              borderRadius: 2,
              bgcolor: 'secondary.main',
              mx: 'auto',
              mt: 1.5,
            },
          }}
        >
          Sobre
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '420px 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              mr: 2.5,
              mb: 2.5,
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                transform: 'translate(20px, 20px)',
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            <Box
              component="img"
              src={FotoSobre}
              alt="Interior da fábrica Mega Moldes"
              sx={{
                position: 'relative',
                display: 'block',
                width: '100%',
                height: { xs: 320, md: 480 },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Box>

          <Box>
            <Typography component="h3" sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 700, color: 'primary.main', mb: 2 }}>
              Conheça a Mega Moldes
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 20 }, mb: 3 }}>
              Somos a Mega Moldes, atuando desde 2016, há mais de 10 anos, no mercado de moldes
              para injeção plástica. Realizamos todas as etapas da produção: projeto, usinagem,
              ferramentaria e injeção. Isso nos permite oferecer ao cliente um único ponto de
              contato, prazos mais ágeis e controle de qualidade em todo o processo, do molde à
              peça final.
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 20 } }}>
              Contamos com equipe técnica experiente e máquinas modernas, o que garante precisão
              nas medidas e durabilidade dos moldes. Atendemos diversos segmentos, como
              automotivo, domésticos e embalagens, sempre com o compromisso com a qualidade e o
              prazo que procura.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Sobre;
