import React from 'react'
import { Formik, Form } from 'formik'

function FormikContainer () {
  const initialValues = {}
  const onSubmit = () => {}

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {formik => <Form></Form>}
    </Formik>
  )
}

export default FormikContainer
