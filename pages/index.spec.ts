import { mount } from '@vue/test-utils'
import Index from './index.vue'
import { describe, expect, it } from 'vitest'

describe('Index', () => {
  it('should mount the component', async () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeDefined()
  })

  it('should find text', async () => {
    const wrapper = mount(Index)
    expect(wrapper.text()).toContain('Hello, World!')
  })
})
