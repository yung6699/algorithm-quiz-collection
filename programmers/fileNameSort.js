function solution(files) {
  const organizedFiles = files.map((file, index) => ({ file, index }));
  organizedFiles.sort((a, b) => {
    const result = compare(a.file, b.file);
    return (result === 0) ? a.index - b.index : result;
  });
  return organizedFiles.map(({file}) => file);
}

function compare(first, second) {
  const reg = /(\D*)(\d*)/i;
  const A = first.match(reg);
  const B = second.match(reg);
  console.log(A, B);
  if (A[1].toLowerCase() !== B[1].toLowerCase()) return A[1].toLowerCase().localeCompare(B[1].toLowerCase());
  return Number(A[2]) - Number(B[2]);
}

const test = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
const test2 = ['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'];
console.log(solution(test))
console.log(solution(test2))
