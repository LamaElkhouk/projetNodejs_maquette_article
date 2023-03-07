db.createUser(
    {
        user: 'anon',
        pwd: 'marbleCake',
        roles: [
            {
                role: 'readWrite',
                db: 'mydb'
            }
        ]
    }
);
db.createCollection('users');