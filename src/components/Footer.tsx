import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

import { Flex } from '@/components/Flex';

export function Footer() {
  return (
    <Box width="100%">
      <Box
        sx={{
          minHeight: 400,
          background: 'rgb(63, 59, 59)',
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%' }}>
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
                    src="/logo.png"
                    alt="logo"
                    loading="lazy"
                    width="350px"
                    height="90px"
                  />
                </Box>
                <Box mb={3}>
                  <Typography fontSize={15} color="white">
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
                <Typography fontSize={18} fontWeight="bold">
                  Services
                </Typography>
                <Link href="/" color="inherit" underline="none">
                  <Typography
                    mt={3}
                    fontSize={15}
                    sx={{
                      transition: '0.3s ease',
                      '&:hover': {
                        color: 'rgb(202, 31, 38)',
                      },
                    }}
                  >
                    Complete order - Store in warehouse
                  </Typography>
                </Link>
                <Link href="/" color="inherit" underline="none">
                  <Typography
                    mt={3}
                    fontSize={15}
                    sx={{
                      transition: '0.3s ease',
                      '&:hover': {
                        color: 'rgb(202, 31, 38)',
                      },
                    }}
                  >
                    Shipping - Delivery
                  </Typography>
                </Link>
                <Link href="/" color="inherit" underline="none">
                  <Typography
                    mt={3}
                    fontSize={15}
                    sx={{
                      transition: '0.3s ease',
                      '&:hover': {
                        color: 'rgb(202, 31, 38)',
                      },
                    }}
                  >
                    Report - Data analysis
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} height="70%">
              <Box color="white" my={3}>
                <Typography fontSize={18} fontWeight="bold">
                  Contact
                </Typography>
                <Link href="/" color="inherit" underline="none">
                  <Flex
                    mt={3}
                    alignItems="center"
                    sx={{
                      transition: '0.3s ease',
                      '&:hover': {
                        color: 'rgb(202, 31, 38)',
                      },
                    }}
                  >
                    <FmdGoodIcon fontSize="large" />
                    <Typography fontSize={15} ml={3}>
                      Số 9 Trà Khúc, Phường 02, Quận Tân Bình, Tp. Hồ Chí Minh
                    </Typography>
                  </Flex>
                </Link>
                <Link href="/" color="inherit" underline="none">
                  <Flex
                    mt={3}
                    alignItems="center"
                    sx={{
                      transition: '0.3s ease',
                      '&:hover': {
                        color: 'rgb(202, 31, 38)',
                      },
                    }}
                  >
                    <PhoneIcon fontSize="large" />
                    <Typography fontSize={15} ml={3}>
                      02836366941
                    </Typography>
                  </Flex>
                </Link>
                <Link href="/" color="inherit" underline="none">
                  <Flex
                    mt={3}
                    alignItems="center"
                    sx={{
                      transition: '0.3s ease',
                      '&:hover': {
                        color: 'rgb(202, 31, 38)',
                      },
                    }}
                  >
                    <HomeIcon fontSize="large" />
                    <Typography fontSize={15} ml={3}>
                      Đường An Phú Đông 13, P. An Phú Đông, Quận 12, Tp. Hồ Chí
                      Minh
                    </Typography>
                  </Flex>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Typography textAlign="center" fontSize={14} color="white">
          © Copyright by Kiet Nguyen - All right reserved.
        </Typography>
      </Box>
    </Box>
  );
}
