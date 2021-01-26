## Fourse
### О проекте
+ Backend проекта Fourse.     


### Функциональность
    отправлять через Postman

    GET сourses — возвращает все курсы
    GET сourse/:name — возвращает курс по его названию
    POST courses — создаёт курс с переданными в теле: 
    name, s_info, l_info, owner, link
    PATCH courses/:id — обновляет статью по id
    DELETE courses/:id — удаляет сохранённый курс по id
    POST photos — загружает фотографию из формы (обязательный тип формы: multipart/form-data, input.name: "photo") на сервер, сохраняя путь в БД  


### Развертывание проекта
1. Установить `Node.js`
2. Клонировать репозиторий `https://github.com/Ginger-Raccoon/Fourse_back-end.git`
3. Установить зависимости `npm i`
4. `npm run start` запускает сервер на `localhost:3000`
5. `npm run dev` запускает сервер на `localhost:3000` с хот релоудом
