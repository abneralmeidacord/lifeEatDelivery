import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Avatar, Box, Button, Input, ScreenContainer, Text } from '~/components';
import { FoodBg } from './styles';

export const NewProductScreen = () => {
  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      title: 'Panqueca Life Eat',
      description: 'Feito com ovo, molho de tomate e carne moída',
      price: 'R$ 13,90',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('Título é obrigatório')
        .min(4, 'Nome deve ter no mínimo 4 caracteres'),
      description: Yup.string()
        .required('Descrição é obrigatório')
        .min(4, 'Descrição deve ter no mínimo 4 caracteres'),
      price: Yup.string()
        .required('Valor é obrigatório')
        .min(5, 'Valor inválido'),
    }),
  });
  return (
    <ScreenContainer scroll title="Adicionar Produtos" withBack>
      <Box alignItems="center">
        <FoodBg>
          <Box alignItems="center" pt={27}>
            <Avatar
              size="large"
              source={{
                uri: 'https://scontent.fvag1-1.fna.fbcdn.net/v/t39.30808-6/277554711_494632778989055_8863184648846766225_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=btK9PS99WVkAX_QN7gU&_nc_ht=scontent.fvag1-1.fna&oh=00_AT-fOp108PMIXkwL4cDv0oXtNRVr3yz-lz5_djUjLTC8kQ&oe=62705E2E',
              }}
            />
            <Text.TextLink mt={9}>Alterar foto</Text.TextLink>
          </Box>
        </FoodBg>
        <Box mb={120}>
          <Input
            label="Título"
            value={values.title}
            onChangeText={text => setFieldValue('name', text)}
            error={errors.title}
          />
          <Input
            label="Descrição"
            value={values.description}
            onChangeText={text => setFieldValue('email', text)}
            error={errors.description}
            mt={12}
          />
          <Input
            label="Valor"
            value={values.price}
            onChangeText={text => setFieldValue('phoneNumber', text)}
            error={errors.price}
            mt={12}
          />
        </Box>
        <Button>Salvar</Button>
        <Button mt={12} outline>
          Excluir Produto
        </Button>
      </Box>
    </ScreenContainer>
  );
};
