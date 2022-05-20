import React from 'react';
import { Box, Button } from '~/components';
import { ModalView } from './styles';

export const Modal = ({ visible, buttonText, buttonAction, children }) => {
  return (
    <ModalView  animationType="slide" visibile={visible} transparent>
      <Box flex={1} justifyContent="flex-end" bg="darkTransparent">
        <Box bg="white" h="50%" w="100%" topLeftRadius={16} topRightRadius={16}>
          <Box flexDir="column" h="100%" alignItems="center" flex={1}>
            {children}
            {buttonText && (
              <Box mt={100}>
                <Button onPress={buttonAction}>{buttonText}</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </ModalView>
  );
};
