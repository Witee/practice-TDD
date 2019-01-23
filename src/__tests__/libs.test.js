import wordCount from '../libs';


describe('返回字符及数量', () => {
  test('空字符串', () => {
    const actual = wordCount('');
    const expected = '';

    expect(actual).toBe(expected);
  });

  test('1个字符串', () => {
    const actual = wordCount('he');
    const expected = 'he 1';

    expect(actual).toBe(expected);
  });

  test('两个不同字符串', () => {
    const actual = wordCount('he is');
    const expected = 'he 1\r\nis 1';

    expect(actual).toBe(expected);
  });

  test('有两同单词，分组', () => {
    const actual = wordCount('he he is');
    const expected = 'he 2\r\nis 1';

    expect(actual).toBe(expected);
  });

  test('有两同单词，分组并排序', () => {
    const actual = wordCount('he is is');
    const expected = 'is 2\r\nhe 1';

    expect(actual).toBe(expected);
  });

  test('多个空格', () => {
    const actual = wordCount('he   is');
    const expected = 'he 1\r\nis 1';

    expect(actual).toBe(expected);
  });

  test('多个单词，多个空格', () => {
    const actual = wordCount('it was the age of wisdom it was the age of foolishness it is');
    const expected = 'it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1';

    expect(actual).toBe(expected);
  });
});
