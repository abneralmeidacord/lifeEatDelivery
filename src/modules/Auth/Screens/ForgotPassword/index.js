import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AuthWrapper, Input, Button, ScreenContainer, Box } from '~/components';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '~/services';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useAuthStore();


  const goToConfirmEmail = () => {
    navigation.navigate('ConfirmEmail');
  };

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),
    }),
    onSubmit: props => {
      setUser(props);
      goToConfirmEmail();
    },
  });

  return (
    <ScreenContainer mb={24} alignItems="center" title="Esqueci minha senha" subtitle="Para redefinir sua senha, informe sua conta de e-mail">
      <Input
        label="E-mail"
        value={values.email}
        onChangeText={text => setFieldValue('email', text)}
        error={errors.email}
        placeholder="meu.email@exemplo.com"
      />
      <Button onPress={handleSubmit} mt={450}>
        Próximo
      </Button>
    </ScreenContainer>
  );
};
