// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적 O, 값, 속성 추적 X
const num2 = document.getElementById("num2");

const result = document.getElementById("result")

function plus(){ // 함수 정의 (코드가 있다는 것을 인식하고 호출 전까지 수행 X)
    const n1 = Number( num1.value );
    const n2 =  Number( num2.value );

    console.log(n1 + n2);
    
    result.innerHTML =  n1 + n2 ;
}

function minus(){
    console.log(num1.value);
    console.log(num2.value);
    
    console.log( Number( num1.value ) - Number( num2.value ) );

    result.innerHTML =  Number( num1.value ) - Number( num2.value ) ;
}

function multiply(){
    result.innerHTML =  Number( num1.value ) * Number( num2.value ) ;
}

function devide(){
    result.innerHTML =  Number( num1.value ) / Number( num2.value ) ;
}

function remainder(){
    result.innerHTML =  Number( num1.value ) % Number( num2.value ) ;
}

