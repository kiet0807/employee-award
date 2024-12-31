import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DevicesIcon from '@mui/icons-material/Devices';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Flex } from '@/components/Flex';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NomineeCard } from '@/components/NomineeCard';
import { SuccessModal } from '@/components/SuccessModal';
import { employeeMockData } from '@/db/employeeMockData';
import { getEmployees } from '@/server/getEmployees';
import { CATEGORIES } from '@/utils/constants';
import { Employee } from '@/utils/types';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [businessDominee, setBusinessDominee] = useState<number | null>(null);
  const [technicalDominee, setTechnicalDominee] = useState<number | null>(null);

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setBusinessDominee(null);
    setTechnicalDominee(null);
    setOpen(false);
  };

  //Get employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        // Fake data to check UX/UI
        setEmployees(employeeMockData);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleBallot = (id: number, category: string) => {
    if (category === CATEGORIES.business) setBusinessDominee(id);
    else if (category === CATEGORIES.technical) setTechnicalDominee(id);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Box m={'-8px -8px'} position="relative" overflow="hidden">
      <Header />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/banner.png)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: 0.15,
          zIndex: -1,
        }}
      ></Box>
      <Container maxWidth="lg">
        <Box mx={4} my={10}>
          <Box pb={2}>
            <Typography
              textAlign="center"
              fontSize={18}
              fontWeight="bold"
              color="rgb(202, 31, 38)"
            >
              NOMINEE AWARDS 2024
            </Typography>
          </Box>
          <Box pb={2}>
            <Typography textAlign="center" fontSize={28} fontWeight="bold">
              Nominate Your Favorite Employees
            </Typography>
          </Box>
          <Box m={4}>
            <Flex
              bgcolor="rgb(202, 31, 38)"
              p={2}
              my={4}
              alignItems="center"
              borderRadius={2}
            >
              <Box color="white" ml={2}>
                <DevicesIcon fontSize="large" />
              </Box>
              <Typography ml={2} color="white" fontSize={16} fontWeight="bold">
                Technical Department
              </Typography>
            </Flex>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {employees &&
                employees
                  .filter(
                    (employee) => employee.category === CATEGORIES.technical
                  )
                  .map((employeeTechnical) => (
                    <Grid item xs={12} md={6} lg={4} key={employeeTechnical.id}>
                      <NomineeCard
                        id={employeeTechnical.id}
                        name={employeeTechnical.name}
                        avatar={employeeTechnical.avatar}
                        category={employeeTechnical.category}
                        selected={technicalDominee === employeeTechnical.id}
                        handleBallot={handleBallot}
                      />
                    </Grid>
                  ))}
            </Grid>
          </Box>
          <Box m={4}>
            <Flex
              bgcolor="rgb(202, 31, 38)"
              p={3}
              my={4}
              alignItems="center"
              borderRadius={2}
            >
              <Box color="white" ml={2}>
                <BusinessCenterIcon fontSize="large" />
              </Box>
              <Typography ml={2} color="white" fontSize={16} fontWeight="bold">
                Business Department
              </Typography>
            </Flex>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {employees &&
                employees
                  .filter(
                    (employee) => employee.category === CATEGORIES.business
                  )
                  .map((employeeBusiness) => (
                    <Grid item xs={12} md={6} lg={4} key={employeeBusiness.id}>
                      <NomineeCard
                        id={employeeBusiness.id}
                        name={employeeBusiness.name}
                        avatar={employeeBusiness.avatar}
                        category={employeeBusiness.category}
                        selected={businessDominee === employeeBusiness.id}
                        handleBallot={handleBallot}
                      />
                    </Grid>
                  ))}
            </Grid>
          </Box>

          <Button
            disabled={!businessDominee || !technicalDominee}
            onClick={handleOpen}
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 2.5,
              background: 'rgb(255, 0, 8)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
              position: 'fixed',
              bottom: 40,
              right: 50,
              fontSize: 16,
              '&:hover': {
                background: 'rgb(197, 52, 57)',
              },
            }}
          >
            send nominations
          </Button>
        </Box>
        <SuccessModal
          open={open}
          handleClose={handleClose}
          businessDominee={
            (employees &&
              employees.find((employee) => employee.id === businessDominee)
                ?.name) ||
            ''
          }
          technicalDominee={
            (employees &&
              employees.find((employee) => employee.id === technicalDominee)
                ?.name) ||
            ''
          }
        />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
