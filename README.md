## Set-up

#### Cloning an existing project from git

1. Clone the project files into the current folder:
   `git clone https://https://github.com/ikoroleva/invoicing-app.git`
2. Install vendor libraries: `composer install`
3. Make .env: `cp .env.example .env`
4. Generate application key `php artisan key:generate`

#### Virtual host configuration

5. Into the **hosts** file add a line: `127.0.0.1 www.invoicing-app.test`
6. Add configuration of the new virtual host (**vhosts.conf**):

```
<VirtualHost *:80>
    ServerName www.invoicing-app.test
    ServerAlias invoicing-app.test
    DocumentRoot "C:\web\final-project\invoicing-app\public"
    Header set Access-Control-Allow-Origin "*"
    Header set Cache-Control "no-cache, must-revalidate"
</VirtualHost>
```

#### Create a database

7. Create a database **invoicing-db** using phpMyAdmin or the command line.
8. Configure the database connection in **.env** using the DB\_ settings.
   `DB_DATABASE=invoicing-db`

#### Frontend compilation

9. Run `npm install`
10. Make sure to configure the APP_URL setting in **.env** with the correct URL:
    `APP_URL=http://www.invoicing-app.test`
11. Run `npm run watch`

#### Run seeders

12. Doublecheck each Seeder and make sure that Model name in each Seeder is corresponding with actual Model name and method name in Seeder
13. Run for each Seeader: `php artisan db:seed --class=SeederName`

#### API Controllers

14. Uncomment corresponding methods in **App/Http/Controllers/Api/Controllername** files to retreive data from our DB
