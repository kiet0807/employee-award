import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Grid, Typography } from '@mui/material';

import { Flex } from '@/components/Flex';

export function Footer() {
  return (
    <Box width="100%">
      <Box
        sx={{
          minHeight: 500,
          background: 'rgb(63, 59, 59)',
        }}
      >
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <Grid
            container
            height="100%"
            spacing={{ xs: 3, md: 4 }}
            sx={{
              display: 'flex',
            }}
          >
            <Grid item xs={12} md={6} lg={6} height="80%">
              <Box pr={10}>
                <Box>
                  <img
                    src="src/assets/logo.png"
                    alt="logo"
                    loading="lazy"
                    width="350px"
                    height="90px"
                  />
                </Box>
                <Box mb={3}>
                  <Typography variant="h6" color="white">
                    N & H Logistics provides comprehensive order fulfillment
                    solutions, from warehousing, packaging, and shipping to
                    logistics management. With an optimized system, extensive
                    network, and experienced team, we are committed to
                    delivering trust and excellence to our clients.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} height="70%">
              <Box color="white" my={3}>
                <Typography variant="h5" fontWeight="bold">
                  Services
                </Typography>
                <Typography mt={3} fontSize={18} sx={{ cursor: 'pointer' }}>
                  Complete order - Store in warehouse
                </Typography>
                <Typography mt={3} fontSize={18} sx={{ cursor: 'pointer' }}>
                  Shipping - Delivery
                </Typography>
                <Typography mt={3} fontSize={18} sx={{ cursor: 'pointer' }}>
                  Report - Data analysis
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} height="70%">
              <Box color="white" my={3}>
                <Typography variant="h5" fontWeight="bold">
                  Contact
                </Typography>
                <Flex mt={3} alignItems="center">
                  <FmdGoodIcon fontSize="large" />
                  <Typography fontSize={18} ml={3}>
                    Số 9 Trà Khúc, Phường 02, Quận Tân Bình, Tp. Hồ Chí Minh
                  </Typography>
                </Flex>
                <Flex mt={3} alignItems="center">
                  <PhoneIcon fontSize="large" />
                  <Typography fontSize={18} ml={3}>
                    02836366941
                  </Typography>
                </Flex>
                <Flex mt={3} alignItems="center">
                  <HomeIcon fontSize="large" />
                  <Typography fontSize={18} ml={3}>
                    Đường An Phú Đông 13, P. An Phú Đông, Quận 12, Tp. Hồ Chí
                    Minh
                  </Typography>
                </Flex>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
