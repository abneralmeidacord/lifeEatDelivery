import React from 'react';
import { Box, Avatar, Text, LocationImage } from '~/components';

export const AddressCard = ({ item, location, ...props }) => {
  return (
    <Box
      {...props}
      minH={110}
      w={335}
      br={8}
      borderColor="primary"
      bw={1}
      flexDir="row"
      alingItems="center"
      justifyContent="space-between"
      p={16}
      keyExtractor={item => item.id}>
      <LocationImage />
      <Box alignItems="flex-start" justifyContent="flex-start" ml={16} w={224}>
        <Text.CardTitle mb={3}>Rua Padre João, 148</Text.CardTitle>
        <Text.CardText>Centro, Cláudio/MG</Text.CardText>
        <Text.CardText>CEP 35530-000
          
        </Text.CardText>
      </Box>
    </Box>
  );
};
