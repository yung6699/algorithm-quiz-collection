function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  const firstTruck = truck_weights.shift();
  let currentWeight = firstTruck;
  let queue = [{ weight: firstTruck, time: answer }];

  while(queue.length) {
    answer += 1;

    queue = queue.map(item =>{
      const time = item.time + 1;
      return { ...item, time }
    });

    if (queue[0].time > bridge_length) {
      const truck = queue.shift();
      const weight = truck.weight;
      currentWeight -= weight;
    }

    const truckWeight = truck_weights[0];
    const temp = currentWeight + truckWeight;

    if (weight >= temp) {
      currentWeight = temp;
      queue.push({ weight: truck_weights.shift(), time: 1 });
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]))
// console.log(solution(100, 100, [10]))
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
