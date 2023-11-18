import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Elaaf',
        email: 'elaaf@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name: 'Nisha',
        email: 'nisha@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name: 'Ans',
        email: 'ans@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    }
];

export default users;