import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ScreenContainer, Input, Box, Button } from '~/components';

export const AddressScreen = () => {
  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      cep: '35530-000',
      street: 'Rua Padre João',
      number: '148',
      complement: 'Casa',
      district: 'Centro',
      city: 'Cláudio',
      state: 'MG',
    },
    validationSchema: Yup.object().shape({
      cep: Yup.string()
        .required('CEP é obrigatório')
        .min(9, 'CEP deve ter no mínimo 9 caracteres'),
      street: Yup.string().required('Rua é obrigatório').email('Rua inválido'),
      number: Yup.string()
        .required('Número é obrigatório')
        .min(1, 'Número inválido'),
      complement: Yup.string()
        .required('Complemento é obrigatório')
        .min(4, 'Complemento deve ter no mínimo 4 caracteres'),
      district: Yup.string()
        .required('Bairro é obrigatório')
        .min(6, 'Bairro deve ter no mínimo 6 caracteres'),
      city: Yup.string()
        .required('Cidade é obrigatório')
        .min(6, 'Cidade deve ter no mínimo 6 caracteres'),
      state: Yup.string()
        .required('Estado é obrigatório')
        .min(6, 'Estado deve ter no mínimo 6 caracteres'),
    }),
  });

  return (
    <ScreenContainer withBack borderColor="gray" title="Endereço">
      <Box mt={24} mb={24} alignItems="center">
        <Input
          label="CEP"
          value={values.cep}
          onChangeText={text => setFieldValue('cep', text)}
          error={errors.cep}
        />
        <Input
          label="Rua"
          value={values.street}
          onChangeText={text => setFieldValue('street', text)}
          error={errors.street}
          mt={16}
        />
        <Input
          label="Número"
          value={values.number}
          onChangeText={text => setFieldValue('number', text)}
          error={errors.number}
          mt={16}
        />
        <Input
          label="Complemento"
          value={values.complement}
          onChangeText={text => setFieldValue('complement', text)}
          error={errors.complement}
          mt={16}
        />
        <Input
          label="Bairro"
          value={values.district}
          onChangeText={text => setFieldValue('district', text)}
          error={errors.district}
          mt={16}
        />
        <Input
          label="Cidade"
          value={values.city}
          onChangeText={text => setFieldValue('city', text)}
          error={errors.city}
          mt={16}
        />
        <Input
          label="Estado"
          value={values.state}
          onChangeText={text => setFieldValue('state', text)}
          error={errors.state}
          mt={16}
          mb={50}
        />
        <Button>Salvar</Button>
      </Box>
    </ScreenContainer>
  );
};
