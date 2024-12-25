import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

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
    <Card
      sx={{
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: selected ? '#6699FF' : 'white',
      }}
    >
      <CardContent>
        <Box my={3}>
          <Typography fontWeight="bold" textAlign="center">
            {name}
          </Typography>
        </Box>
        <Avatar
          alt="Nominee image"
          src="src/assets/avatar.jpg"
          sx={{ width: 130, height: 130 }}
        />
      </CardContent>
      <CardActions>
        <Box mt={3} mb={1}>
          <Button
            onClick={onClick}
            variant="contained"
            size="large"
            sx={{ px: 5, py: 2, background: '#624DE7' }}
          >
            Select
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
