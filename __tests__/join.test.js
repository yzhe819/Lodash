import join from '../join';
it('should return join all array elements into a string', () => {
    expect(join(['a', 'b', 'c'], '~')).toEqual('a~b~c');
});