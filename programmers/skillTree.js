function solution(skill, skill_trees) {
  var answer = 0;

  skill_trees.forEach(tree => {
    const regex = new RegExp(`[^${skill}]`, 'g');
    const result = tree.replace(regex, '').split('');
    console.log('result', result)
    for (let i = 0; i < result.length; i++) {
      if (skill[i] !== result[i]) return;
    }
    answer += 1;
  });
  return answer;
}


console.log(solution('CBD', ["BACDE", "CBADF", "AECB", "BDA"]))
