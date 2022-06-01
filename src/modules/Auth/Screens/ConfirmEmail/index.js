import React from 'react';
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


export const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useAuthStore();

  const goToNewPassword = () => {
    navigation.navigate('NewPassword');
  };

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: Yup.object().shape({
      code: Yup.string()
        .required('Código é obrigatório')
        .min(6, 'Código deve ter no mínimo 6 caracteres'),
    }),
    onSubmit: props => {
      setUser(props);
      goToNewPassword();
    },
  });

  return (
    <ScreenContainer
      mb={24}
      alignItems="center"
      title="Confirme seu e-mail"
      subtitle="Enviamos um código de 6 dígitos para o seu e-mail. Confirme-o digitando-o no campo abaixo.">
      <Input
        label="Código"
        value={values.code}
        onChangeText={text => setFieldValue('code', text)}
        error={errors.code}
        placeholder="XXXXXX"
      />
      <Box flexDir="column" alignItems="flex-start" w={300} mt={12}>
        <Box flexDir="column" alignItems="flex-start" h={30}>
          <Text.RegularText>Não recebeu o código?</Text.RegularText>
          <Touchable flexDir="row" alignItems="flex-start">
            <Text.MediumText>Clique aqui?</Text.MediumText>
            <Text.RegularText> para enviar novamente</Text.RegularText>
          </Touchable>
        </Box>
      </Box>

      <Button onPress={handleSubmit} mt={417}>
        Próximo
      </Button>
    </ScreenContainer>
  );
};
