function solution(tickets) {
  const answer = [];

  function DFS(tickets, start, plan){
    if(tickets.length === 0) answer.push(plan);
    tickets.forEach((ticket, i) => {
      const [begin, end] = ticket;
      if(begin === start) {
        let copiedTickets = [ ...tickets ];
        copiedTickets.splice(i,1);
        DFS(copiedTickets, end, [...plan, end])
      }
    })
  }
  DFS(tickets,'ICN',["ICN"])
  return answer.sort()[0]
}


console.log(solution([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']]))
