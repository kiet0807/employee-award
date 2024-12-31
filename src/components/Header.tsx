import { Box, Button, Container, Link, Typography } from '@mui/material';

import { Flex } from '@/components/Flex';

export function Header() {
  return (
    <Box width="100%">
      <Container maxWidth="lg">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          height={[80, 80, 90, 90]}
        >
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              loading="lazy"
              width="220px"
              height="65px"
            />
          </Link>
          <Flex width="50%" justifyContent="space-around">
            <Box sx={{ cursor: 'pointer' }}>
              <Typography fontSize={16} fontWeight={800}>
                Home
              </Typography>
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
              <Typography fontSize={16} fontWeight={800}>
                Services
              </Typography>
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
              <Typography fontSize={16} fontWeight={800}>
                Career
              </Typography>
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
              <Typography fontSize={16} fontWeight={800}>
                Contact
              </Typography>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <Box
        height={500}
        sx={{
          backgroundImage: 'url(/banner.png)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          <Flex
            width={['80%', '60%', '60%', '45%']}
            flexDirection="column"
            justifyContent="center"
            sx={{
              height: '100%',
            }}
          >
            <Box mb={1}>
              <Typography
                fontSize={[25, 25, 25, 28]}
                color="white"
                fontWeight={800}
              >
                Honoring Outstanding Achievements
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography
                fontSize={[25, 25, 25, 28]}
                color="white"
                fontWeight={800}
              >
                Nominee Award 2024
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography fontSize={[16, 16, 16, 18]} color="white">
                We celebrate individuals and organizations for their remarkable
                accomplishments in 2024, driving innovation and growth across
                industries.
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography fontSize={[16, 16, 16, 18]} color="white">
                This recognition serves as a testament to their talent,
                dedication, and passion, while inspiring the community and
                future generations to aim higher.
              </Typography>
            </Box>
            <Box>
              <Button
                href="#nomination"
                variant="contained"
                size="large"
                sx={{
                  px: 8,
                  py: 3,
                  background: 'rgb(202, 31, 38)',
                  '&:hover': {
                    background: 'rgb(169, 72, 76)',
                  },
                }}
              >
                nomination
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
