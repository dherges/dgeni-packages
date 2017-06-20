import { TsParser } from '.';
import { getAccessibility } from './getAccessibility';
const path = require('canonical-path');

describe('getAccessibility', () => {
  let parser: TsParser;
  let basePath: string;
  beforeEach(() => {
    parser = new TsParser(require('dgeni/lib/mocks/log')(false));
    basePath = path.resolve(__dirname, '../../../mocks');
  });

  it('should return the accessibility of class members', () => {
    const parseInfo = parser.parse(['tsParser/getAccessibility.test.ts'], basePath);

    const module = parseInfo.moduleSymbols[0];
    const testClassMembers = module.exportArray[0].members!;

    const xee = testClassMembers.get('xee')!;
    expect(getAccessibility(xee.declarations![0])).toEqual('public');
    const yuu = testClassMembers.get('yuu')!;
    expect(getAccessibility(yuu.declarations![0])).toEqual('public');
    const bar = testClassMembers.get('bar')!;
    expect(getAccessibility(bar.declarations![0])).toEqual('protected');
    const foo = testClassMembers.get('foo')!;
    expect(getAccessibility(foo.declarations![0])).toEqual('private');
  });
});
