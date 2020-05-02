import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer () {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option 3' }
  ]
  const rcOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option 3' }
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required')
  })
  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
            formik={formik}
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            formik={formik}
          />
          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
            formik={formik}
          />
          <FormikControl
            control='radio'
            label='Radio topic'
            name='radioOption'
            options={rcOptions}
            formik={formik}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
