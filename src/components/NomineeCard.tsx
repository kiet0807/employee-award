import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from '@mui/material';

import { Flex } from '@/components/Flex';

interface NomineeCardProps {
  id: number;
  avatar?: string;
  name: string;
  category: string;
  selected: boolean;
  handleBallot: (id: number, category: string) => void;
}

export function NomineeCard({
  id,
  name,
  category,
  selected,
  handleBallot,
}: NomineeCardProps) {
  const onClick = () => handleBallot(id, category);
  return (
    <Paper elevation={10}>
      <Card
        sx={{
          p: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: selected ? 'rgb(234, 162, 165)' : 'white',
        }}
      >
        <CardContent>
          <Box my={3}>
            <Typography fontWeight="bold" textAlign="center">
              {name}
            </Typography>
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <Avatar
              alt="Nominee image"
              src="/avatar.jpg"
              sx={{ width: 130, height: 130 }}
            />
          </Flex>

          <Box my={2}>
            <Typography fontWeight="bold" textAlign="center">
              Team Leader
            </Typography>
            <Box my={2}>
              <Typography textAlign="center" fontSize={15}>
                A key contributor to the technical team, he optimized systems to
                enhance efficiency by 25% and resolved critical issues swiftly.
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Box my={1} mb={2}>
            <Button
              onClick={onClick}
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                background: 'rgb(202, 31, 38)',
                '&:hover': {
                  backgroundColor: 'rgb(169, 72, 76)',
                },
              }}
            >
              Select
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Paper>
  );
}
