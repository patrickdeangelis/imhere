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
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      }
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
