import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal, Typography } from '@mui/material';

import { Flex } from '@/components/Flex';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: ['80%', '70%', '40%', '40%'],
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface SuccessModalProps {
  open: boolean;
  handleClose: () => void;
  businessDominee: string;
  technicalDominee: string;
}

export function SuccessModal({
  open = false,
  handleClose,
  businessDominee,
  technicalDominee,
}: SuccessModalProps) {
  return (
    <Box>
      <Modal open={open}>
        <Box sx={style}>
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Box />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              SUCCESS
            </Typography>
            <Box onClick={handleClose} sx={{ cursor: 'pointer' }}>
              <CloseIcon />
            </Box>
          </Flex>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have successfully nominated {businessDominee} and{' '}
            {technicalDominee}.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
