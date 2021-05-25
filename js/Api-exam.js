window.onload = function () {
    // 1초마다 시간 갱신하기
    setInterval(() => {
        var now = document.querySelector('.clock');
        var date = Date();
        now.innerHTML = date;
    }, 1000);

    //버튼 동작
    var home = document.querySelector('.fa-home');
    var button4 = document.querySelector('#button1');
    var button5 = document.querySelector('#button2');
    var button6 = document.querySelector('#button3');

    home.addEventListener('click', function () {
        window.location.href = './index.html';
    });

    // 맵 api
    var map_api = document.querySelector('.map_api-container');
    var techerable = document.querySelector('.teacherbleMachine-container');
    var others = document.querySelector('.others-container');

    button4.addEventListener('click', function () {
        map_api.style.display = 'block';
        techerable.style.display = 'none';
        others.style.display = 'none';
        button4.style.backgroundColor = 'grey';
        button5.style.backgroundColor = 'greenyellow';
        button6.style.backgroundColor = 'greenyellow';
    });

    button5.addEventListener('click', function () {
        techerable.style.display = 'block';
        map_api.style.display = 'none';
        others.style.display = 'none';
        button5.style.backgroundColor = 'grey';
        button4.style.backgroundColor = 'greenyellow';
        button6.style.backgroundColor = 'greenyellow';
    });

    button6.addEventListener('click', function () {
        others.style.display = 'block';
        techerable.style.display = 'none';
        map_api.style.display = 'none';
        button6.style.backgroundColor = 'grey';
        button5.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'greenyellow';
    });
};