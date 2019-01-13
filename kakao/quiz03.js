/* 
    카카오 3번 문제
    http://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/
*/

const arr = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.jpg"]
// const arr = ["img12.png", "img10.png", "img2.png", "img1.png"]
// const arr = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
function solution(files) {
    let answerWrap = files.map((file, index) => ({file, index}));
    const compare = (a, b) => {
      const reg = /(\D*)(\d*)/i;
      const A = a.match(reg);
      const B = b.match(reg);

      console.log(A,B);

      const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
      const compareNumber = (a, b) => {
         return parseInt(a) > parseInt(b) ? 
            1 : parseInt(a) < parseInt(b) ? 
             -1 
            : 0
      }
      return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead
    }
    answerWrap.sort((a, b) => {
      const result = compare(a.file, b.file);
      return result === 0 ? a.index - b.index : result;
    })
    return answerWrap.map(answer => answer.file);
}

console.log(solution(arr));