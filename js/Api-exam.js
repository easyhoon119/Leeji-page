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

    //타이틀 클릭시 reload
    var title = document.querySelector('.title');

    title.addEventListener('click', function () {
        window.location.reload();
    });

    // 맵 api
    var map_api = document.querySelector('.map_api-container');
    var techerable = document.querySelector('.teacherbleMachine-container');
    var others = document.querySelector('.others-container');
    var explain = document.querySelector('.explain');

    button4.addEventListener('click', function () {
        map_api.style.display = 'block';
        techerable.style.display = 'none';
        others.style.display = 'none';
        explain.style.display = 'none';
        button4.style.backgroundColor = 'grey';
        button5.style.backgroundColor = 'greenyellow';
        button6.style.backgroundColor = 'greenyellow';
        var containers = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.223293, 127.187169), //지도의 중심좌표.
            level: 6, //지도의 레벨(확대, 축소 정도)
            scrollwheel: false
        };

        var map = new kakao.maps.Map(containers, options); //지도 생성 및 객체 리턴


        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(37.223293, 127.187169);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            map: map
        });
    });

    button5.addEventListener('click', function () {
        techerable.style.display = 'block';
        map_api.style.display = 'none';
        others.style.display = 'none';
        explain.style.display = 'none';
        button5.style.backgroundColor = 'grey';
        button4.style.backgroundColor = 'greenyellow';
        button6.style.backgroundColor = 'greenyellow';
    });

    button6.addEventListener('click', function () {
        others.style.display = 'block';
        techerable.style.display = 'none';
        map_api.style.display = 'none';
        explain.style.display = 'none';
        button6.style.backgroundColor = 'grey';
        button5.style.backgroundColor = 'greenyellow';
        button4.style.backgroundColor = 'greenyellow';
    });
};