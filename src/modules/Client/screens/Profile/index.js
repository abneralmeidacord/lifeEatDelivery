import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  ScreenContainer,
  Avatar,
  Box,
  Input,
  Text,
  Scroll,
  AddressCard,
  Button,
} from '~/components';

export const ProfileScreen = () => {
  const DATA = [
    {
      id: 0,
      line1: 'Rua Padre João, 148',
      line2: 'Centro, Cláudio/MG',
      line3: 'CEP 35530-000',
    },
  ];

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      name: 'Abner',
      email: 'abnersolk@gmail.com',
      phoneNumber: '(37) 99860-1606',
      password: '*********',
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
        .min(15, 'Celular inválido'),
      password: Yup.string()
        .required('Senha é obrigatório')
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    }),
  });

  return (
    <ScreenContainer scroll borderColor="gray" title="Perfil">
      <Box pt={28} pb={100} alignItems="center" w={375}>
        <Scroll>
          <Avatar
            size="largeCircle"
            source={{
              uri: 'https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            }}
          />
          <Text.TextLink pt={5} color="primary">
            Alterar foto
          </Text.TextLink>
          <Box
            mt={26}
            mb={16}
            w={335}
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Dados Pessoais</Text.Title>
            <Text.TextLink>Alterar</Text.TextLink>
          </Box>
          <Box mb={24}>
            <Input
              label="NOME"
              value={values.name}
              onChangeText={text => setFieldValue('name', text)}
              error={errors.name}
            />
            <Input
              label="EMAIL"
              value={values.email}
              onChangeText={text => setFieldValue('email', text)}
              error={errors.email}
              mt={16}
            />
            <Input
              label="CELULAR"
              value={values.phoneNumber}
              onChangeText={text => setFieldValue('phoneNumber', text)}
              error={errors.phoneNumber}
              mt={16}
            />
            <Input
              label="SENHA"
              value={values.password}
              onChangeText={text => setFieldValue('password', text)}
              error={errors.password}
              mt={16}
            />
          </Box>
          <Box
            mb={16}
            w={335}
            flexDir="row"
            justifyContent="space-between"
            alignItems="baseline">
            <Text.Title>Endereço</Text.Title>
            <Text.TextLink>Alterar</Text.TextLink>
          </Box>
          <AddressCard mb={32} location={DATA} />
          <Button onPress={handleSubmit}>Salvar</Button>
        </Scroll>
      </Box>
    </ScreenContainer>
  );
};
