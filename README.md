Trucks that pass bridge
===

# Explain

Trucks should pass a one line bridge in order.<br> Calculate how time all trucks pass a bridge.<br>
Truck could move a length by a second, inputs are bridge length and maximum weights on bridge.<br>
* if truck dont go up a bridge perfectly, no consideration of its weights.

For example, there is a bridge with length 2, weights 10kg. For trucks that have weight [7, 4, 5, 6]kg pass this bridge for minimum time in order, must pass a bridge like below
|pass time|passing trucks|trucks on bridge|waiting trucks|
|:---|:---|:---|:---|
|0|[]|[]|[7,4,5,6]|
|1 ~ 2|[]|[7]|[4,5,6]|
|3|[7]|[4]|[5,6]|
|4|[7]|[4,5]|[6]|
|5|[7,4]|[5]|[6]|
|6 ~ 7|[7,4,5]|[6]|[]|
|8|[7,4,5,6]|[]|[]|

Therefore, for All trucks pass a bridge, 8 seconds need.<br><br>
write a function that return how time need trucks pass a bridge when inputs are bridge_length and weight on a bridge.<br><br><br>

CONSTRAINT
 - brideg_length is 1 or more and 10,000 or less
 - weight is  1 or more and 10,000 or less
 - truck_weights length is 1 or more and 10,000 or less
 - all truck`s weights are 1 or more and weight or less. 

Ex > 
|bridge_length|weight|truck_weights|return|
|:---|:---|:---|:---|
|2|10|[7,4,5,6]|8|
|100|100|[10]|101|
|100|100|[10,10,10,10,10,10,10,10,10,10]|110|


source : https://programmers.co.kr/learn/courses/30/lessons/42583
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges