## Fourse
### О проекте
+ Backend проекта Fourse.     


### Функциональность
    отправлять через Postman

    GET /getCourses - возвращает все курсы
    GET /getCourse/:name - возвращает курс по его названию
    POST /createCourse — создаёт курс с переданными в теле: 
    name, s_info, l_info, owner, link
    PATCH /updateCourse/:id — обновляет статью по id
    DELETE /deleteCourse/:id — удаляет сохранённый курс по id


### Развертывание проекта
1. Установить `Node.js`
2. Клонировать репозиторий `https://github.com/Ginger-Raccoon/Fourse_back-end.git`
3. Установить зависимости `npm i`
4. `npm run start` запускает сервер на `localhost:3000`
5. `npm run dev` запускает сервер на `localhost:3000` с хот релоудом
