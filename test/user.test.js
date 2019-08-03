const {graphql} = require('graphql');
const {schema} = require('../app.js');
const User = require('../models/User');
//CONFIGURACION DE DATOS
const setupTest = require('./helpers');

const MUTATION_ADD_USER = `
    mutation add_user($data:createUser!){
        createUser(data:$data){
            _id,
            email,
            password,
            phone,
            name
	    }
    }
`

describe('UserTest', () => {
    beforeEach(async () => await setupTest());
    it('crear Usuario',()=> {
        const mockUser = async () => {
            const data = {
                email: 'prueba1@gmail.com',
                password: 'prueba1',
                phone: '2321321321',
                name: 'prueba'
            }
            const response = await graphql(schema,MUTATION_ADD_USER,null,{},{data});
            expect(response.data.createUser).toHaveProperty("_id");
        }
        mockUser();
        
    },30000) 
})