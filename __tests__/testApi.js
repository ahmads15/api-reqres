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
        expect(response.body.page).toEqual(2);
        expect(response.body.per_page).toEqual(6);
        expect(response.body.total_pages).toEqual(2);
        expect(response.body.data[0].id).toEqual(7);
        expect(response.body.data[0].email).toEqual('michael.lawson@reqres.in');
        expect(response.body.data[0].first_name).toEqual('Michael');
        expect(response.body.data[0].last_name).toEqual('Lawson');
        expect(response.body.data[0].avatar).toEqual('https://reqres.in/img/faces/7-image.jpg');
        expect(response.body.data[1].id).toEqual(8);
        expect(response.body.data[1].email).toEqual('lindsay.ferguson@reqres.in');
        expect(response.body.data[1].first_name).toEqual('Lindsay');
        expect(response.body.data[1].last_name).toEqual('Ferguson');
        expect(response.body.data[1].avatar).toEqual('https://reqres.in/img/faces/8-image.jpg');
        expect(response.body.data[2].id).toEqual(9);
        expect(response.body.data[2].email).toEqual('tobias.funke@reqres.in');
        expect(response.body.data[2].first_name).toEqual('Tobias');
        expect(response.body.data[2].last_name).toEqual('Funke');
        expect(response.body.data[2].avatar).toEqual('https://reqres.in/img/faces/9-image.jpg');
        expect(response.body.data[3].id).toEqual(10);
        expect(response.body.data[3].email).toEqual('byron.fields@reqres.in');
        expect(response.body.data[3].first_name).toEqual('Byron');
        expect(response.body.data[3].last_name).toEqual('Fields');
        expect(response.body.data[3].avatar).toEqual('https://reqres.in/img/faces/10-image.jpg');
        expect(response.body.data[4].id).toEqual(11);
        expect(response.body.data[4].email).toEqual('george.edwards@reqres.in');
        expect(response.body.data[4].first_name).toEqual('George');
        expect(response.body.data[4].last_name).toEqual('Edwards');
        expect(response.body.data[4].avatar).toEqual('https://reqres.in/img/faces/11-image.jpg');
        expect(response.body.data[5].id).toEqual(12);
        expect(response.body.data[5].email).toEqual('rachel.howell@reqres.in');
        expect(response.body.data[5].first_name).toEqual('Rachel');
        expect(response.body.data[5].last_name).toEqual('Howell');
        expect(response.body.data[5].avatar).toEqual('https://reqres.in/img/faces/12-image.jpg');
        expect(response.body.support.url).toEqual('https://reqres.in/#support-heading');
        expect(response.body.support.text).toEqual('To keep ReqRes free, contributions towards server costs are appreciated!');
    });
});

describe('Post Create User', () => {
    test('User success create new user', async () => {
        let body = data.seedData;
        response = await endpoints.apiCreateData(body);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('morpheus');
        expect(response.body.job).toEqual('leader');
    });
});