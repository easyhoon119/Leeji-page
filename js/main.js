window.onload = function () {
    // 1초마다 시간 갱신하기
    setInterval(() => {
        var now = document.querySelector('.clock');
        var date = Date();
        now.innerHTML = date;
    }, 1000);
    // 타이틀 옆에 사진 띄우기
    var title = document.querySelector('.title');
    var face = document.querySelector('.my_face');
    title.addEventListener('click', function () {
        face.style.display = 'block';
    });
    // button 동작
    var button1 = document.querySelector('#button1');
    var button2 = document.querySelector('#button2');
    var button3 = document.querySelector('#button3');
    var home = document.querySelector('.fa-home');

    home.addEventListener('click', function () {
        window.location.href = './index.html';
    });

    button1.addEventListener('click', function () {
        window.location.href = './my_project1.html';
    });

    button2.addEventListener('click', function () {
        window.location.href = "./Api-project1.html";
    });
};