import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import ImgProjeto from '../assets/image 13.png';
import ImgFerramentaria from '../assets/image 9.png';
import ImgUsinagem from '../assets/image 18.png';
import ImgInjecao from '../assets/image 19.png';

const servicos = [
  {
    titulo: 'Projeto',
    img: ImgProjeto,
    texto: 'Desenvolvemos o projeto do molde a partir da peça do cliente, analisando viabilidade, materiais e processo de injeção para evitar problemas na produção.',
  },
  {
    titulo: 'Ferramentaria',
    img: ImgFerramentaria,
    texto: 'Montamos, ajustamos e realizamos a manutenção dos moldes, mantendo o desempenho e prolongando a vida útil da ferramenta.',
  },
  {
    titulo: 'Usinagem',
    img: ImgUsinagem,
    texto: 'Torno, centro de usinagem CNC e eletroerosão para produzir cavidades, machos e componentes do molde com medidas exatas e acabamento de qualidade.',
  },
  {
    titulo: 'Injeção de plásticos',
    img: ImgInjecao,
    texto: 'Produzimos suas peças em série, do protótipo ao grande volume, com repetibilidade e controle de qualidade em cada lote.',
  },
];

function Servicos() {
  return (
    <Box component="section" id="servicos" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'action.hover' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: 28, md: 34 },
            fontWeight: 700,
            color: 'primary.main',
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
          Serviços
        </Typography>
        <Typography color="text.secondary" sx={{ textAlign: 'center', mt: 2, mb: { xs: 4, md: 6 } }}>
          Todas as etapas do molde à peça final, em um só lugar.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {servicos.map((s) => (
            <Card
              key={s.titulo}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', sm: 'column' },
                borderRadius: 3,
                transition: 'transform .25s ease, box-shadow .25s ease',
                '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                image={s.img}
                alt={s.titulo}
                sx={{ width: { xs: 120, sm: '100%' }, height: { xs: 'auto', sm: 170 }, objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2.5 }}>
                <Typography component="h3" sx={{ fontSize: 21, fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {s.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.texto}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Servicos;