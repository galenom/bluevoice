# bluevoice-server

1. install python3

```zsh
cd server/
pip3 install django django_rest_framework markdown django-filter django-cors-headers django-rest-swagger pyyaml uritemplate

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py loaddata data
python3 manage.py runserver
```

# bluevoice-client

1. create expo account if you want to run in mobile Expo Go appw

```zsh
cd client/
npm i
npx expo start
› Press w │ open web // Easier
or log into expo cli `npx expo login ` and in app and scan qr code in  terminal // more involved

```

1. login with username `api_admin` and password `Test123`
