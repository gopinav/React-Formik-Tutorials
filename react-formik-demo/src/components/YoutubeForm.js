import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  name: 'Vishwas',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

const savedValues = {
  name: 'Vishwas',
  email: 'v@example.com',
  channel: 'codevolution',
  comments: 'Welcome to Formik',
  address: '221B Baker Street',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

const onSubmit = (values, submitProps) => {
  console.log('Form data', values)
  console.log('submitProps', submitProps)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required')
})

const validateComments = value => {
  let error
  if (!value) {
    error = 'Required'
  }
  return error
}

function YoutubeForm () {
  const [formValues, setFormValues] = useState(null)
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {formik => {
        console.log('Formik props', formik)
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field type='email' id='email' name='email' />
              <ErrorMessage name='email'>
                {error => <div className='error'>{error}</div>}
              </ErrorMessage>
            </div>

            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field
                type='text'
                id='channel'
                name='channel'
                placeholder='YouTube channel name'
              />
              <ErrorMessage name='channel' />
            </div>

            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <Field
                as='textarea'
                id='comments'
                name='comments'
                validate={validateComments}
              />
              <ErrorMessage name='comments' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {({ field, form, meta }) => {
                  // console.log('Field render')
                  return (
                    <div>
                      <input type='text' {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  )
                }}
              </FastField>
            </div>

            <div className='form-control'>
              <label htmlFor='facebook'>Facebook profile</label>
              <Field type='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
              <label htmlFor='twitter'>Twitter profile</label>
              <Field type='text' id='twitter' name='social.twitter' />
            </div>

            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary phone number</label>
              <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>

            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary phone number</label>
              <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>

            <div className='form-control'>
              <label>List of phone numbers</label>
              <FieldArray name='phNumbers'>
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps
                  const { values } = form
                  const { phNumbers } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  )
                }}
              </FieldArray>
            </div>
            {/* <button
              type='button'
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true
                })
              }
            >
              Visit all
            </button> */}
            <button type='button' onClick={() => setFormValues(savedValues)}>
              Load saved data
            </button>
            <button type='reset'>Reset</button>
            <button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default YoutubeForm
