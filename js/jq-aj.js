window.onload = function () {
    // 1초마다 시간 갱신하기
    setInterval(() => {
        var now = document.querySelector('.clock');
        var date = Date();
        now.innerHTML = date;
    }, 1000);
    //버튼 동작
    var button1 = document.querySelector('#button1');
    var button2 = document.querySelector('#button2');
    var button3 = document.querySelector('#button3');
    var button4 = document.querySelector('#button4');
    var slider = document.querySelector('.slider-container');
    var toggle_exam = document.querySelector('.toggle-container');
    var home = document.querySelector('.fa-home');

    home.addEventListener('click', function () {
        window.location.href = './index.html';
    });

    button1.addEventListener('click', function () {
        slider.style.display = 'block';
        toggle_exam.style.display = 'none';

        button1.style.backgroundColor = 'grey';
        button4.style.backgroundColor = 'greenyellow';
    });

    button4.addEventListener('click', function () {
        slider.style.display = 'none';
        toggle_exam.style.display = 'flex';

        button1.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'grey';
    });
    //타이틀 클릭시 reload
    var title = document.querySelector('.title');

    title.addEventListener('click', function () {
        window.location.reload();
    });
};