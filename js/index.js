let heroesJson = `[{
    "name":"Бэтмен",
    "kindOfAct" : "Борец с преступностью, филантроп, миллиардер",
    "power" : "Интеллект, обширные познания, знания боевых искусств, ловкость",
    "image" : "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    "descrip" : "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности.Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом.Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
},{
    "name" : "Человек-паук",
    "kindOfAct" : "Борец за справедливость, студент, фотограф",
    "power" : "Сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "image" : "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    "descrip" : "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность»."
},{
    "name" : "Чудо-женщина",
    "kindOfAct" : "Cупергероиня, секретарь-референт",
    "power" : "Cверхчеловеческая сила искорость, выносливость, полет",
    "image" : "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
    "descrip" : "Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :)Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника,где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и ононикогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
}]`;

document.addEventListener('DOMContentLoaded', function(event) {
    let heroes = JSON.parse(heroesJson);
    console.log(heroes);

    let content = "";
    for (let hero of heroes) {
        content += `<div class = "hero">
        <h2 class ="heading">${hero.name}</h2>
        <div class = "content">Род деятельности : ${hero.kindOfAct}</div>
        <div class = "content">Суперсилы : ${hero.power}</div>
        <img src ="${hero.image}" alt = "Картинка супергероя" class ="img">
        <div class = "content">Описание героя: ${hero.descrip}</div>
        </div>`;
    }
    document.getElementById('heroesContainer').innerHTML = content;
});

let funcBat = () => {
    let bat = document.getElementById('rating1').value;
    if (localStorage.getItem('ratingBat') === null) {
        localStorage.setItem('ratingBat', bat);
    }
};
bat.addEventListener('click', funcBat);

let funcSp = () => {
    let sp = document.getElementById('rating2').value;
    if (localStorage.getItem('ratingSp') === null) {
        localStorage.setItem('ratingSp', sp);
    }
};
sp.addEventListener('click', funcSp);

let funcWom = () => {
    let wom = document.getElementById('rating3').value;
    if (localStorage.getItem('ratingWom') === null) {
        localStorage.setItem('ratingWom', wom);
    }
};
wom.addEventListener('click', funcWom);

document.addEventListener('DOMContentLoaded', function(event) {
    let ratingBat = localStorage.getItem('ratingBat');
    if (localStorage.getItem('ratingBat') !== null) {
        document.getElementById('rating1').value = ratingBat;
    }
})

document.addEventListener('DOMContentLoaded', function(event) {
    let ratingSp = localStorage.getItem('ratingSp');
    if (localStorage.getItem('ratingSp') !== null) {
        document.getElementById('rating2').value = ratingSp;
    }
})

document.addEventListener('DOMContentLoaded', function(event) {
    let ratingWom = localStorage.getItem('ratingWom');
    if (localStorage.getItem('ratingWom') !== null) {
        document.getElementById('rating3').value = ratingWom;
    }
})