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
    var weather_api = document.querySelector('.weather-container');
    var home = document.querySelector('.fa-home');

    home.addEventListener('click', function () {
        window.location.href = 'http://classnet.mju.ac.kr/~s60161893/interpro_project/index.html';
    });

    button1.addEventListener('click', function () {
        slider.style.display = 'block';
        toggle_exam.style.display = 'none';
        spread.style.display = 'none';
        explain.style.display = 'none';
        weather_api.style.display = 'none';

        button1.style.backgroundColor = 'grey';
        button4.style.backgroundColor = 'greenyellow';
        button2.style.backgroundColor = 'greenyellow';
        button3.style.backgroundColor = 'greenyellow';

        //슬라이더 구현
        $('.slider').bxSlider();
    });

    button4.addEventListener('click', function () {
        slider.style.display = 'none';
        toggle_exam.style.display = 'flex';
        spread.style.display = 'none';
        explain.style.display = 'none';
        weather_api.style.display = 'none';

        button1.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'grey';
        button2.style.backgroundColor = 'greenyellow';
        button3.style.backgroundColor = 'greenyellow';
    });

    button2.addEventListener('click', function () {
        slider.style.display = 'none';
        toggle_exam.style.display = 'none';
        spread.style.display = 'block';
        explain.style.display = 'none';
        weather_api.style.display = 'none';

        button1.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'greenyellow';
        button2.style.backgroundColor = 'grey';
        button3.style.backgroundColor = 'greenyellow';
    });

    button3.addEventListener('click', function () {
        slider.style.display = 'none';
        toggle_exam.style.display = 'none';
        spread.style.display = 'none';
        explain.style.display = 'none';
        weather_api.style.display = 'flex';

        button1.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'greenyellow';
        button2.style.backgroundColor = 'greenyellow';
        button3.style.backgroundColor = 'grey';
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
    //날씨 api 구현하기
    var weather1 = document.querySelector('.weather1');
    var weather2 = document.querySelector('.weather2');
    var weather3 = document.querySelector('.weather3');
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=8f152b03cee54f5c6f59fd728db26f32",
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (resp) {
            weather1.innerHTML = "나라 : " + resp.sys.country + "<br/>";
            weather1.innerHTML += "도시 : " + resp.name + "<br/>";
            weather1.innerHTML += "현재 온도 : " + (resp.main.temp - 273.15) + "'c" + "<br/>";
            weather1.innerHTML += "현재 습도 : " + resp.main.humidity + "%" + "<br/>";
            weather1.innerHTML += "현재 날씨 : " + resp.weather[0].main + "<br/>";
            weather1.innerHTML += "상세 날씨 : " + resp.weather[0].description + "<br/>";
            weather1.innerHTML += "바람 세기 : " + resp.wind.speed + "<br/>";
            weather1.innerHTML += "구름양 : " + resp.clouds.all + "%" + "<br/>";
        }
    });
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=8f152b03cee54f5c6f59fd728db26f32",
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (resp) {
            weather2.innerHTML = "나라 : " + resp.sys.country + "<br/>";
            weather2.innerHTML += "도시 : " + resp.name + "<br/>";
            weather2.innerHTML += "현재 온도 : " + (resp.main.temp - 273.15) + "'c" + "<br/>";
            weather2.innerHTML += "현재 습도 : " + resp.main.humidity + "%" + "<br/>";
            weather2.innerHTML += "현재 날씨 : " + resp.weather[0].main + "<br/>";
            weather2.innerHTML += "상세 날씨 : " + resp.weather[0].description + "<br/>";
            weather2.innerHTML += "바람 세기 : " + resp.wind.speed + "<br/>";
            weather2.innerHTML += "구름양 : " + resp.clouds.all + "%" + "<br/>";
        }
    });
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=Washington&appid=8f152b03cee54f5c6f59fd728db26f32",
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (resp) {
            weather3.innerHTML = "나라 : " + resp.sys.country + "<br/>";
            weather3.innerHTML += "도시 : " + resp.name + "<br/>";
            weather3.innerHTML += "현재 온도 : " + (resp.main.temp - 273.15) + "'c" + "<br/>";
            weather3.innerHTML += "현재 습도 : " + resp.main.humidity + "%" + "<br/>";
            weather3.innerHTML += "현재 날씨 : " + resp.weather[0].main + "<br/>";
            weather3.innerHTML += "상세 날씨 : " + resp.weather[0].description + "<br/>";
            weather3.innerHTML += "바람 세기 : " + resp.wind.speed + "<br/>";
            weather3.innerHTML += "구름양 : " + resp.clouds.all + "%" + "<br/>";
        }
    });
};