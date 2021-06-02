window.onload = function () {
    // 1초마다 시간 갱신하기
    setInterval(() => {
        var now = document.querySelector('.clock');
        var date = Date();
        now.innerHTML = date;
    }, 1000);
    //버튼 동작
    var button4 = document.querySelector('#button4');
    var button5 = document.querySelector('#button5');
    var button6 = document.querySelector('#button6');
    var home = document.querySelector('.fa-home');

    home.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    //타이틀 클릭시 reload
    var title = document.querySelector('.title');

    title.addEventListener('click', function () {
        window.location.reload();
    });

    //iframe 동작
    var blossom = document.querySelector('.blossom');
    var predict_face = document.querySelector('.predict_face');
    var pygame = document.querySelector('.pygame');
    var explain = document.querySelector('.explain');

    button4.addEventListener('click', function () {
        predict_face.style.display = 'none';
        blossom.style.display = 'block';
        pygame.style.display = 'none';
        explain.style.display = 'none';
        button4.style.backgroundColor = 'gray';
        button5.style.backgroundColor = 'greenyellow';
        button6.style.backgroundColor = 'greenyellow';
    });

    button5.addEventListener('click', function () {
        predict_face.style.display = 'block';
        blossom.style.display = 'none';
        pygame.style.display = 'none';
        explain.style.display = 'none';
        button5.style.backgroundColor = 'gray';
        button4.style.backgroundColor = 'greenyellow';
        button6.style.backgroundColor = 'greenyellow';
    });

    button6.addEventListener('click', function () {
        pygame.style.display = 'block';
        predict_face.style.display = 'none';
        blossom.style.display = 'none';
        explain.style.display = 'none';
        button6.style.backgroundColor = 'gray';
        button5.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'greenyellow';
    });
};