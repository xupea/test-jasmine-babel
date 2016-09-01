import Foo from '../../app/scripts/core/foo.es6'

describe('test Foo class', () => {
  it('test static bar', () => {
    expect(Foo.bar()).toEqual('bar')
  })
})
