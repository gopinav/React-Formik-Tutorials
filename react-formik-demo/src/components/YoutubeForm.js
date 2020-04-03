import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
  name: 'Vishwas',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validate = values => {
  // values.name values.email values.channel
  const errors = {}
  // errors.name errors.email and errors.channel
  // errors.name = 'This field is required'

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.name = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.channel) {
    errors.name = 'Required'
  }

  return errors
}

function YoutubeForm () {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  // console.log(formik.values)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          id='channel'
          name='channel'
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
