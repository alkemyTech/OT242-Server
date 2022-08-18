# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```

## Users seeders:

#### standard user format:

```
{
firstName: 'Standard',
lastName: '<number of standard user>', // it will be a number in string datatype
email: 'standard@example.com',
image: "srcOfStandard",
password: "standard",
roleId: 2,
createdAt: 2022-08-10 22:41:15, // example date
updatedAt: 2022-08-10 22:41:15 // example date
}
```

#### regular user format:

```
{
firstName: 'Regular',
lastName: '<number of regular user>', // it will be a number in string datatype
email: 'regular@example.com',
image: "srcOfRegular",
password: "regular",
roleId: 2,
createdAt: 2022-08-10 22:41:15, // example date
updatedAt: 2022-08-10 22:41:15 // example date
}
```
