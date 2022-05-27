import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  AuthWrapper,
  Input,
  Button,
  ScreenContainer,
  Box,
  Touchable,
  Text,
  SuccessModal,
} from '~/components';
import { useNavigation } from '@react-navigation/native';

export const NewPasswordScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .required('Nova senha é obrigatório')
        .min(8, 'Nova senha deve ter no mínimo 8 caracteres'),
      confirmNewPassword: Yup.string()
        .required('Nova senha é obrigatório')
        .min(8, 'Nova senha deve ter no mínimo 8 caracteres'),
    }),
  });

  return (
    <ScreenContainer
      mb={24}
      alignItems="center"
      title="Redefina a sua senha"
      subtitle="Para redefina a sua senha digite-a nos campos abaixo">
      <Input
        label="Nova senha"
        value={values.code}
        onChangeText={text => setFieldValue('code', text)}
        error={errors.code}
        placeholder="Nova senha"
      />
      <Input
        label="Confirmar nova senha"
        value={values.code}
        onChangeText={text => setFieldValue('code', text)}
        error={errors.code}
        mt={16}
        placeholder="Nova senha"
      />
      <Button onPress={() => setSuccessModalVisible(true)} mt={417}>
        Próximo
      </Button>

      {successModalVisible && (
        <Box alignItems="center">
          <SuccessModal
            onPress={goToLogin}
            visilble={successModalVisible}
            text="Senha redefinida com sucesso!"
          />
        </Box>
      )}
    </ScreenContainer>
  );
};
