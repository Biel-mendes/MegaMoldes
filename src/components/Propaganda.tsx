import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Flyer from '../assets/image 8.png';

type Slide = { tipo: 'imagem' | 'video'; src: string; alt?: string; poster?: string };

const slides: Slide[] = [
  { tipo: 'imagem', src: Flyer, alt: 'Quer transformar sua ideia em um produto? Deixa com a gente!' },
  // { tipo: 'video', src: '/videos/usinagem.mp4', poster: '/videos/usinagem.jpg' },
];

function Propaganda() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="md">
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 4,
            '--swiper-theme-color': (t) => (t.vars ?? t).palette.secondary.main,
            '--swiper-navigation-size': '28px',
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            navigation
            pagination={{ clickable: true }}
            keyboard
            autoHeight
            onSlideChange={(s) => s.el.querySelectorAll('video').forEach((v) => v.pause())}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.src}>
                {s.tipo === 'imagem' ? (
                  <Box component="img" src={s.src} alt={s.alt ?? ''} sx={{ display: 'block', width: '100%', height: 'auto' }} />
                ) : (
                  <Box
                    component="video"
                    src={s.src}
                    poster={s.poster}
                    controls
                    playsInline
                    preload="metadata"
                    sx={{ display: 'block', width: '100%', height: 'auto', bgcolor: '#000' }}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default Propaganda;