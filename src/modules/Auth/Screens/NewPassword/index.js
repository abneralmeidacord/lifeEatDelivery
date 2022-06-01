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
import { useAuthStore } from '~/services';

export const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useAuthStore();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required('Nova senha é obrigatório')
        .min(8, 'Nova senha deve ter no mínimo 8 caracteres'),
      confirmPassword: Yup.string()
        .required('Nova senha é obrigatório')
        .min(8, 'Nova senha deve ter no mínimo 8 caracteres'),
    }),
    onSubmit: props => {
      setUser(props);
      setSuccessModalVisible(true);
    },
  });

  return (
    <ScreenContainer
      mb={24}
      alignItems="center"
      title="Redefina a sua senha"
      subtitle="Para redefina a sua senha digite-a nos campos abaixo">
      <Input
        label="Nova senha"
        value={values.password}
        onChangeText={text => setFieldValue('password', text)}
        error={errors.password}
        placeholder="********"
      />
      <Input
        label="Confirmar nova senha"
        value={values.confirmPassword}
        onChangeText={text => setFieldValue('confirmPassword', text)}
        error={errors.confirmPassword}
        mt={16}
        placeholder="********"
      />
      <Button onPress={handleSubmit} mt={400}>
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
