import { mount, createLocalVue } from '@vue/test-utils'
import QuestionBox from "@/components/QuestionBox"

const localVue = createLocalVue()


describe('Testing Header component', () => {
    const wrapper = mount(QuestionBox, {
      propsData: {
        currentQuestion: {incorrect_answers: ['bosco', 'vasco']},
        next : jest.fn,
        increment : jest.fn
      },
      computed: {
        answers: ['bosco', 'vasco'],
      },
      localVue
    })


    it('Should Contain props currentQuestion', () => {
      expect(wrapper.props('currentQuestion')).toBeTruthy();
    })

    it('Should contain props next function', () => {
      expect(wrapper.props('next')).toBeTruthy();
    })

    it('Should contain props increment function', () => {
        expect(wrapper.props('increment')).toBeTruthy();
    })

    // it('Should Trigger the submitanswer method on button click', () => {
    //     const wrapper = mount(QuestionBox)
    //     wrapper.vm.increment = jest.fn
    //     const clickMethodStub = jest.fn
    //     // const mockMethod = wrapper.vm.increment
    //     wrapper.setMethods({ shuffledAnswer: clickMethodStub})
    //     const button = wrapper.find('.btn')
    //     button.trigger('click')
    //     expect(clickMethodStub).toHaveBeenCalled()
    // })

  })