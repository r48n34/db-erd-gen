import { expect, test } from 'vitest'
import { tab } from "../../src/utilis/generateTab"
import { uuidGen } from "../../src/utilis/uuidGen"

test('tab normal functions test', () => {
    expect(tab()).toBe(`\t\t`);
    expect(tab(3)).toBe(`\t\t\t`);
    expect(tab(7)).toBe(`\t\t\t\t\t\t\t`);
    expect(tab(-1)).toBe(``);
})

test('uuidGen normal functions test', () => {
    expect(uuidGen()).toHaveLength(32);
    expect(uuidGen(18)).toHaveLength(18);
})