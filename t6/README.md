# Developing

#### Client

  1. `yarn`
  2. `yarn start`
  3. Url: <http://localhost:3000/>

### Server

Run following commands to start service:

  1. `yarn`
  2. `yarn start`
  3. Urls:
     - Api: <http://localhost:3001/api/>
     - Documentation (Swagger):  <http://localhost:3001/api/api-docs>

### Database

You can run MariaDB on local computer or in docker.
User: `root`
Password: `my-secret-pw`
Docker commands to create/start db:

  1. `docker volume create webdev2020mariadb-data`
  2. `docker run --name webdev2020mariadb -v webdev2020mysql-data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:10.5.6`
  3. Run server/db/init.sql to database with DataGrip or such tool.

After computer restart you can start already created container with command:
`docker start webdev2020mariadb`
