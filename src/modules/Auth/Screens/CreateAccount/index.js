import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  AuthWrapper,
  Input,
  Button,
  ScreenContainer,
  Box,
  Scroll,
} from '~/components';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '~/services';

export const CreateAccountScreen = () => {
  const { setUser } = useAuthStore();
  const navigation = useNavigation();

  const goTo2FA = () => {
    navigation.navigate('2FA');
  };

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caracteres'),
      email: Yup.string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),
      phoneNumber: Yup.string()
        .required('Celular é obrigatório')
        .min(11, 'Celular inválido'),
      password: Yup.string()
        .required('Senha é obrigatório')
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
      confirmPassword: Yup.string()
        .required('Confirmar Senha é obrigatório')
        .min(6, 'Confirmar Senha deve ter no mínimo 6 caracteres'),
    }),
    onSubmit: props => {
      setUser(props);
      goTo2FA();
    },
  });

  return (
    <ScreenContainer scroll mb={24} alignItems="center" title="Crie sua conta">
      <Box align="flex-start">
        <Input
          label="Nome"
          value={values.name}
          onChangeText={text => setFieldValue('name', text)}
          error={errors.name}
          placeholder="Seu Nome"
        />
        <Input
          label="E-mail"
          value={values.email}
          onChangeText={text => setFieldValue('email', text)}
          error={errors.email}
          mt={16}
          placeholder="meu.email@exemplo.com"
        />
        <Input
          label="Celular"
          value={values.phoneNumber}
          onChangeText={text => setFieldValue('phoneNumber', text)}
          error={errors.phoneNumber}
          mt={16}
          placeholder="(XX) X XXXX-XXXX"
        />
        <Input
          label="Senha"
          value={values.password}
          onChangeText={text => setFieldValue('password', text)}
          error={errors.password}
          mt={16}
          placeholder="********"
        />
        <Input
          label="Confirmar senha"
          value={values.confirmPassword}
          onChangeText={text => setFieldValue('confirmPassword', text)}
          error={errors.confirmPassword}
          mt={16}
          placeholder="********"
        />
        <Button onPress={handleSubmit} mt={200}>
          Próximo
        </Button>
      </Box>
    </ScreenContainer>
  );
};
