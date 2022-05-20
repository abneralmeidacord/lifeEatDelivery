import React from 'react';
import { Box, Text, Avatar } from '~/components';

export const ClientCard = ({ ...props }) => {
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
      <Avatar
        source={{
          uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435',
        }}
      />
      <Box alignItems="flex-start" justifyContent="flex-start" ml={16} w={224}>
        <Text.CardTitle mb={4}>João Pedro</Text.CardTitle>
        <Text.CardText mb={4}>(31) 99437-2773</Text.CardText>
        <Text.CardText>joaopedro@lifeeatdelivery.com.br</Text.CardText>
      </Box>
    </Box>
  );
};
