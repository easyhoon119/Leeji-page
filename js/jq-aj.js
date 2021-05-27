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
    var spread = document.querySelector('.spreadSheet-container');
    var explain = document.querySelector('.explain');
    var home = document.querySelector('.fa-home');

    home.addEventListener('click', function () {
        window.location.href = './index.html';
    });

    button1.addEventListener('click', function () {
        slider.style.display = 'block';
        toggle_exam.style.display = 'none';
        spread.style.display = 'none';
        explain.style.display = 'none';

        button1.style.backgroundColor = 'grey';
        button4.style.backgroundColor = 'greenyellow';
        button2.style.backgroundColor = 'greenyellow';

        //슬라이더 구현
        $('.slider').bxSlider();
    });

    button4.addEventListener('click', function () {
        slider.style.display = 'none';
        toggle_exam.style.display = 'flex';
        spread.style.display = 'none';
        explain.style.display = 'none';

        button1.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'grey';
        button2.style.backgroundColor = 'greenyellow';
    });

    button2.addEventListener('click', function () {
        slider.style.display = 'none';
        toggle_exam.style.display = 'none';
        spread.style.display = 'block';
        explain.style.display = 'none';

        button1.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'greenyellow';
        button2.style.backgroundColor = 'grey';
    });
    //타이틀 클릭시 reload
    var title = document.querySelector('.title');

    title.addEventListener('click', function () {
        window.location.reload();
    });
    //toggle button 제어
    var toggle_btn = document.querySelector('#toggle_btn');
    toggle_btn.addEventListener('click', function () {
        var name = toggle_btn.className;
        console.log(name);
        if (name.indexOf('lightmode2') != -1) {
            toggle_btn.innerHTML = '다크모드로 보기';
        }

        else {
            toggle_btn.innerHTML = '라이트모드로 보기';
        }
    });
    //googleSpread Sheet with ajax
    var aj_button = document.querySelector('#spreadSubmit');

    aj_button.addEventListener('click', function () {
        var name = document.querySelector('.spread_name').value;
        var free_text = document.querySelector('#intro').value;
        $.ajax({
            type: "GET",
            url: "https://script.google.com/macros/s/AKfycbwIXAP513s8MRWS8Tk3L5pBaRyWD4vsvAxjPBto109ITUDLLp5dl0O_fA53sfIp7mnMLA/exec",
            data: {
                "이름": name,
                "내용": free_text
            },
            success: function (response) {
                console.log('입력 완료.');
            }
        });
    });

};