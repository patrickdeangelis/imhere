import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react'
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'
import { Container } from './styles'
import { CustomTextInput } from '../../global/styles'

interface InputProps extends TextInputProps {
  name: string
  icon?: string
}
interface InputValueReference {
  value: string
}
interface InputRef {
  focus(): void
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest }: InputProps,
  ref
) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const [isFocused, setFocused] = useState(false)

  const handleInputFocused = useCallback(() => {
    setFocused(true)
  }, [])
  const handleInputBlur = useCallback(() => {
    setFocused(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputElementRef.current.focus()
      }
    }
  })

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
    <Container isFocused={isFocused} isErrored={!!error}>
      <CustomTextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default forwardRef(Input)
