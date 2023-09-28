// Создаем XMLHttpRequest объект
var xhr = new XMLHttpRequest();

// Открываем GET-запрос к целевому сайту
xhr.open('GET', 'https://youtube.com', true);

// Устанавливаем заголовок User-Agent на Chrome
xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36');

// Отправляем запрос
xhr.send();
