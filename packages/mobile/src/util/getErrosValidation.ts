import { ValidationError } from 'yup'

interface ErrorsTypes {
  [keyError: string]: string // Interface for any types of errors
}
export default function getErrorsValidation(
  error: ValidationError
): ErrorsTypes {
  const validationErr: ErrorsTypes = {}
  error.inner.forEach(err => {
    validationErr[err.path] = err.message
  })
  return validationErr
}
