import { mount } from '@vue/test-utils'
import Header from "@/components/Header"

describe('Testing Header component', () => {
  const wrapper = mount(Header, {
    propsData: {
      numCorrect: 2,
      numTotal : 5
    }
  })
  // const vm = wrapper.vm
  it('Should render header Fancy Quiz App on dom', () => {
    expect(wrapper.find('b-nav-item b').text()).toBe('Fancy Quiz App')
  })

  it('Should render props correct number', () => {
    expect(wrapper.props('numCorrect')).toBe(2)
  })

  it('Should contain props total', () => {
    expect(wrapper.props('numTotal')).toBe(5)
  })
})
