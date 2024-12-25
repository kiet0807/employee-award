import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { NomineeCard } from '@/components/NomineeCard';
import { SuccessModal } from '@/components/SuccessModal';
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
    <Box>
      <Container sx={{ background: '#fff' }}>
        <Box m={4}>
          <Box pb={2}>
            <Typography textAlign="center" variant="h4">
              AWARDS 2021
            </Typography>
          </Box>
          <Box m={4}>
            <Box bgcolor="#624DE7" p={2} my={4}>
              <Typography color="white" variant="h6">
                Business Department
              </Typography>
            </Box>
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
          <Box m={4}>
            <Box bgcolor="#624DE7" p={2} my={4}>
              <Typography color="white" variant="h6">
                Technical Department
              </Typography>
            </Box>
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
          <Box>
            <Button
              disabled={!businessDominee || !technicalDominee}
              onClick={handleOpen}
              variant="contained"
              size="large"
              color="success"
              sx={{
                px: 7,
                py: 3,
                position: 'fixed',
                bottom: 40,
                right: 50,
                fontSize: 20,
              }}
            >
              submit ballot
            </Button>
          </Box>
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
    </Box>
  );
}

export default App;
