import { Box, BoxProps } from '@mui/material';

export type FlexProps = BoxProps;

export function Flex(props: FlexProps) {
  return <Box display="flex" {...props} />;
}
