import React from 'react';
import { Text, Modal, Icon, Box } from '~/components';

export const SuccessModal = ({ visible, text, onPress }) => {

  return (
    <Modal visible={visible} buttonAction={onPress} buttonText="Continuar">
      <Box w={80} h={200} flexDir="column" alignItems="center">
        <Icon size={80} mt={74} mb={38} name="checkmark-circle-outline" />
        <Text.ScreenTitle w={280} align="center">
          {text}
        </Text.ScreenTitle>
      </Box>
    </Modal>
  );
};
