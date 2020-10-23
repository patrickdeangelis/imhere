import React, { useEffect, useRef } from 'react'
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'
import { CustomTextInput } from '../../global/styles'

interface InputProps extends TextInputProps {
  name: string
  icon?: string
}
interface InputValueReference {
  value: string
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }: InputProps) => {
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <CustomTextInput
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      onChangeText={value => {
        inputValueRef.current.value = value
      }}
      {...rest}
    />
  )
}

export default Input
