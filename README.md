# React 2023-09-14

## ДЗ 1

1. Создать репозиторий(Публичный)
2. Создать ветку с названием - lecture-1/hw
3. Создать в ветке проект
4. Сделать коммит проекта.
5. Очистить проект
6. Сделать коммит очищенного проекта
7. Отобразить все рестораны из моковых данных(materials/mock.js в этом проекте). Отображаем рестораны друг за другом. Логику отрисовку массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
   1. Название ресторана
   2. Заголовок - Меню
   3. Список названий блюд
   4. Заголовок - Отзывы
   5. Список текстов отзывов
8. Сделать коммит
9. Запушить
10. Открыть ПР из ветки с дз в ветку main
11. Отправить ссылку на ПР мне в личные сообщения Discord

## ДЗ 2

1. Реализовать табы с названиями ресторанов.
2. По клику на таб отображается ресторан этого таба, дефолтно активен первый таб
3. В ресторане отображаем инфу о ресторана: название, меню, отзывы.
4. Меню состоит из блюд, каждое блюдо отображает название и кнопки - и +. Между кнопками отображаем кол-во блюда в заказе, дефолтно 0, при клике на кнопки значение меняется на единицу. 0 минимальное, 5 максимальное.
5. В отзывах отображаем просто список отзывов. каждый отзыв: имя и текст.
6. Делаем в отдельной ветке: lecture-2/hw
7. ссылку на пр отправляем в ветку в чате "Домашние задание 2" (см конец лекции, там подробное объяснение дз и способа отправки.)
   Если возникли вопросы пишите в ЛС Дискорда

## ДЗ 3

1. Добавить ключи для массивов
2. Добавить стили:

   1. Должна быть стики шапка (см пример на лекции)
   2. обычный футер
   3. Кнопки табов больше кнопок добавления в заказ
   4. Кнопка задизейбленная и нет имеют разные цвета
   5. Активный таб выделен цветом

## ДЗ 4

1. Сделать темы:
   1. В шапке кнокпка переключения темы
   2. При переключении все кнопки в проекте меняют цвет(цвет любой)
   3. Используем контекст
2. Форма отзыва
   1. После всех отзывов рисуем форму
   2. 3 поля: Имя, Текст, Рейтинг
   3. Кнопка сохранить. По клику на нее форма чистится.
   4. useReducer
3. Доп задание. Открывать форму в модалке:
   1. Читаем про порталы: https://react.dev/reference/react-dom/createPortal
   2. Вместо формы после отзывов рисуем кнопку открытия модалки.
   3. В модалке рисуем форму отзыва и 2 кнопки: сохранить и отменить, по клик на них закрываем модалку

## ДЗ 5

Выполнить правки после разбора.

## ДЗ 6

1. Скопировать в проект normalized-mock.js
2. Установить @reduxjs/toolkit, react-redux
3. Создать стор и подключить к проекту
4. Создать для каждой сущности(рестораны, блюда, отзывы, пользователи) модуль и заполнить initialState данными из normalized-mock.js
5. Заменить использование данных из старого мока на данные из стора.(Используем подход как на лекции).

## ДЗ 7

1. Заменить мокковые данные на данные с сервера.

## ДЗ 8

1. Новые фичи после разбора
2. Прикрутить к форме создания отзыва thunk
3. Модуль корзины
