// id로 접근하기
function fnTest1(){

    // id가 "div1"인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경색을 얻어와 변수에 저장
    const bgColor = div1.style.backgroundColor;

    if(bgColor == 'red'){
        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red"
    }

}

// class로 접근하기
function fnTest2(){

    // 요소 여러 개를 한 번에 접근하는 경우 배열 형태로 반환됨. 
    const arr = document.getElementsByClassName("div2");

    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);

    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";

    // Java와 for문 형식 같은
    for(let i=0; i<arr.length ; i++){
        arr[i].innerText = i + "번째 요소 입니다."
    }

}