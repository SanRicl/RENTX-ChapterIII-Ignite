# delivery-tax

Riderize's delivery tax service

## Local Instance

To use the API locally you should follow the steps:

- Duplicate the repository locally;
- Run ``` npm run install ``` to install the dependencies;
- Run docker-compose up to instance the database and adminer;
- Create a postgresql database called delivery-tax-db;
- Use insomnia / postman to populate the main table using the route localhost:PORT/populate;
- Use insomnia / postman to populate the table of riderize discounts using the route localhost:PORT/populate_riderize_discounts;
- Run ``` npm run dev:server ``` ;

## Deploy

To deploy it is necessary to follow these steps:

- Remember to set the environment variables;
- Commit and push the changes to the repository;

```
git add .
```

```
git commit -m 'explain your updates'
```

```
git push
```

- Check if the service is running;

## Change deploy configuration

To change any deploy's configuration, you should update the sam-pipeline.yml file.
- If necessary, you can also update the template.yml file.

- The secrets used in the sam-pipeline.yml file are defined in the github repository.
