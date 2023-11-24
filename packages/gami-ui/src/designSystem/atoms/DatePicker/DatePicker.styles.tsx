import styled from '@emotion/styled'

export const DatePicker = styled('div')()

export const PickerCalendar = styled('div')(() => ({
  position: 'fixed',
  zIndex: 3,
  '&.hide': {
    visibility: 'hidden',
  },
}))

export const InputContainer = styled('div')()
