/* 
    카카오 3번 문제
    http://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/
*/

const arr = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.gif", "img2.jpg"]
// const arr = ["img12.png", "img10.png", "img2.png", "img1.png"]
// const arr = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
const spliceArr = [];
const result = [];

for (let i = 0; i < arr.length; i++) {
    let file = arr[i];
    let head = '';
    let num = '';
    let tail = '';

    for (let j = 0; j < file.length; j++) {
        let c = file[j].charCodeAt(0);
       if (c >= 48 && c <= 57) {
            num += file[j]
        } else if (num.length) {
            tail += file[j]
        } else {
            head += file[j]
        }
    }
    num = Number(num);
    spliceArr.push({ file, head, num, tail })
}

spliceArr.sort(function (a, b) {
    let str01 = a.head.toLowerCase();
    let str02 = b.head.toLowerCase();
    return str02.localeCompare(str01) || a.num -b.num;
});

console.log(spliceArr);