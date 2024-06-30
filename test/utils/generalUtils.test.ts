import { expect, test, describe } from 'vitest'
import { tab } from "../../src/utilis/generateTab"
import { uuidGen } from "../../src/utilis/uuidGen"

describe('tab', () => {
    test('normal functions test', () => {
        expect(tab()).toBe(`\t\t`);
        expect(tab(3)).toBe(`\t\t\t`);
        expect(tab(7)).toBe(`\t\t\t\t\t\t\t`);
        expect(tab(-1)).toBe(``);
    })
})

describe('uuidGen', () => {
    test('normal functions test', () => { 
        expect(uuidGen()).toHaveLength(32);
        expect(uuidGen(18)).toHaveLength(18);
    })
})