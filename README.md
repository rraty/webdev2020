# webdev2020
Repo Web-Ohjelmointi LTD7003-LTA20V1 kurssin tehtäville.

Exercises with database are run with MariaDB docker image:

`docker volume create webdev2020mariadb-data`

and  start it with persistent data volume:
`docker run --name webdev2020mariadb -v webdev2020mysql-data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:latest`

After computer restart you can start already created container with command:
`docker start webdev2020mariadb`

Now you can connect to db with user name "root" and password "my-secret-pw"