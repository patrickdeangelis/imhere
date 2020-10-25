import React, { useEffect, useRef, useState } from 'react'
import { SwitchProps } from 'react-native'
import { useField } from '@unform/core'
import { TeacherOption, SwitchOption } from './styles'

interface Props extends SwitchProps {
  name: string
  icon?: string
}
interface SwitchValueReference {
  value: boolean
}

const Switch: React.FC<Props> = ({ name, icon, ...rest }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const switchElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const switchValueRef = useRef<SwitchValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: switchValueRef.current,
      path: 'value',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setValue(ref: any, value: boolean) {
        switchValueRef.current.value = value
        switchElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        switchValueRef.current.value = false
        switchElementRef.current.clear()
      }
    })
  }, [fieldName, registerField])
  return (
    <TeacherOption>
      <SwitchOption
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#00FF00' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={(switchValueRef.current.value = isEnabled)}
        //
        // defaultValue={defaultValue}
        // onChangeText={value => {
        //   inputValueRef.current.value = value
        // }}
        {...rest}
      />
    </TeacherOption>
  )
}

export default Switch
