import React from 'react';
import { Box, Text, LocationImage } from '~/components';

export const AddressCard = ({ ...props }) => {
  return (
    <Box
      {...props}
      minH={82}
      w={335}
      br={8}
      borderColor="primary"
      bw={1}
      flexDir="row"
      alingItems="center"
      justifyContent="space-between"
      p={16}>
      <LocationImage />
      <Box alignItems="flex-start" justifyContent="flex-start" ml={16} w={224}>
        <Text.CardTitle mb={4}>Rua Padre João, 148</Text.CardTitle>
        <Text.CardText mb={4}>Centro, Cláudio/MG</Text.CardText>
        <Text.CardText>CEP 35530-000</Text.CardText>
      </Box>
    </Box>
  );
};
