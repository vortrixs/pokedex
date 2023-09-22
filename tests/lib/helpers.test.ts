import ucfirst from '$lib/helpers/ucfirst';
import { expect, test } from '@playwright/test';
import { getPokemonImage } from 'lib/helpers/Images';
import Bulbasaur from '../fixtures/bulbasaur.json' assert { type: 'json' }
import getOffset from 'lib/helpers/getOffset';

test('ucfirst | Converts first letter to uppercase', async () => {
    const original = 'test';

    const transformed = ucfirst(original);

    expect(transformed).toEqual('Test');
});

test('Images::getPokemonImage | Can get image for regular pokemon', async () => {
    const image = getPokemonImage(Bulbasaur, 'normal');

    expect(image).toEqual('/images/pokemon/normal/bulbasaur.gif');
})

test('Images::getPokemonImage | Can get image for shiny pokemon', async () => {
    const image = getPokemonImage(Bulbasaur, 'shiny');

    expect(image).toEqual('/images/pokemon/shiny/bulbasaur.gif');
})

test('getOffset | Can get the offset parameter from a url query string', async () => {
    const url = 'https://example.com?param1=test&offset=28';

    const offset = getOffset(url);

    expect(offset).toEqual(28);
});