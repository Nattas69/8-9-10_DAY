const myArray = ["Абдрахманов Джалиль", "Барышников Андрей", "Бузуев Никита", "Вакилов Ильяс", "Вильгаук Анастасия", "Войцеховский Артём", "Гуляев Михаил", "Казанцев Максим", "Киселёв Михаил", "Койнов Дмитрий", "Колыбина Анна", "Лукьянов Евгений", "Манаев Евгений", "Мисник Елена", "Пахомов Ярослав", "Попов Сергей", "Привалов Владимир", "Старов Александр", "Титенок Анастасия", "Томашевский Владислав", "Фалалеев Никита", "Хайруллин Артур", "Чернышев Николай"];

function embedElements() {
    myArray.forEach(el => {
        document.getElementById('result').innerHTML += `<div>${el}</div><br />`;
    });
}; //вывод списка группы
window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader_malc").style.display = "none";
    }, 400);
}; //прелоадер
$(".favoriteBut").on("click", function() {
    $(this).addClass("active")
    $(this).find(".scattering").addClass("active")
})