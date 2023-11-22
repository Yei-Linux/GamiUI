import { dateFormatter } from '../../../src/core/helpers/date-formatter'

describe('GamiUI date formatter', () => {
  it('1.0 Validate when pattern is date with format: dd/MM/yyyy', () => {
    const dateProp = new Date(2022, 1, 1)
    const pattern = 'dd/MM/yyyy'
    const expected = '01/02/2022'

    const dateFormated = dateFormatter(dateProp, pattern)

    expect(dateFormated).toBeDefined()
    expect(dateFormated).toBe(expected)
  })
  it('1.1 Validate when pattern is date with format: dd/MM/yy', () => {
    const dateProp = new Date(2022, 1, 1)
    const pattern = 'dd/MM/yy'
    const expected = '01/02/22'

    const dateFormated = dateFormatter(dateProp, pattern)

    expect(dateFormated).toBeDefined()
    expect(dateFormated).toBe(expected)
  })

  it('1.2 Validate when pattern is date with format: d/M/yyyy', () => {
    const dateProp = new Date(2022, 1, 1)
    const pattern = 'd/M/yyyy'
    const expected = '1/2/2022'

    const dateFormated = dateFormatter(dateProp, pattern)

    expect(dateFormated).toBeDefined()
    expect(dateFormated).toBe(expected)
  })

  it('1.3 Validate when pattern is date with format: hh:mm:ss', () => {
    const dateProp = new Date(2022, 1, 1)
    const pattern = 'hh:mm:ss'
    const expected = '00:00:00'

    const dateFormated = dateFormatter(dateProp, pattern)

    expect(dateFormated).toBeDefined()
    expect(dateFormated).toBe(expected)
  })
})
