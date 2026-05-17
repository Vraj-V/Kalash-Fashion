import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const ProductBanner = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      style={{ width: '100%', backgroundColor: '#111' }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box
            component="img"
            src={image}
            alt="Banner Image"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            sx={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
