import * as endpoints from '../endpoints/endpointsApi';
import * as data from '../data/postData';
import * as schema from '../schema/getDataSchema';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

let response;
describe('GET List Data User Reqres', () => {
    test('User success get list data', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);
    });
});