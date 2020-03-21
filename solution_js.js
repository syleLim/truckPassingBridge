function solution(bridge_length, weight, truck_weights) {
    let bridge = [];
    let time = 0;
    let times = []
    
    while (truck_weights.length)
    {
        time++;
        times = times.map(e => ++e);
        if (times[0] >= bridge_length)
        {
            times.shift();
            bridge.shift();
        }
        if (bridge.reduce((acc, cur, i) => acc + cur, 0) + truck_weights[0] <= weight)
        {
            bridge.push(truck_weights.shift());
            times.push(0);
        }
    }
    time += bridge_length;
    
    return time;
}