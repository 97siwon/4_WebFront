const container = document.getElementsByClassName("container")[0];
const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

container.style.display = "flex";

// area 클래스 요소에
// 높이 170px, 너비 150px, 테두리 1px 검정색 실선
// display : flex, main-axis 방향 : 열(세로)
// area.style.height = "170px"; --> 배열이라 적용 안됨

for(let item of area){
    item.style.height = "170px";
    item.style.width = "150px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";
}

// box 클래스 요소에 높이 150px, 
// 아랫쪽 테두리 1px 실선 검정색

for(let item of box){
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black";
}

// box-color 클래스 요소의 테두리와 outline을 없애기

for(let item of boxColor){
    item.style.border = "none";
    item.style.outline = "none";
}

// box-color 클래스 요소의 입력된 값이 변했을 때
// 위에 있는 box 클래스 요소의 배경색을 변경
// + 입력된 input 요소 글씨색도 변경
for(let i=0; i<boxColor.length; i++){
    boxColor[i].addEventListener("change", function(){
        console.log(this.value);
        
        box[i].style.backgroundColor = this.value;
        this.style.color = this.value;
    })


}

// transition-duration 변경 버튼 클릭 시
// #input1에 작성된 값 만큼의 transition-duration을
// 모든 box 요소에 추가
document.getElementById("btn1").addEventListener("click", function(){
    const duration = document.getElementById("input1").value;

    for(let item of box){
        item.style.transitionDuration = duration + "s";
    }

    document.getElementById("print1").innerText = duration;
});

// #clearBtn 클릭 시
// .box의 모든 배경색을 없애고
// .box-color에 작성된 값도 없애기 
document.getElementById("clearBtn").addEventListener("click",function(){
    for(let item of box){
        item.style.backgroundColor="";
    }

    for(let item of boxColor){
        item.value = "";
    }
});