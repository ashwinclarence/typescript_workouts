


let row: number = 3;
let column: number = 3;
let arr1:number[][]=[[1,2,3],[1,2,3],[1,2,3]]
let arr2:number[][]=[[2,2,2],[2,2,2],[2,2,2]]
let result:number[][]=new Array(row).fill(0).map(()=>new Array(column).fill(0))
for (let i = 0; i < row; i++){
    for (let j = 0; j < column; j++){
        result[i][j]=arr1[i][j]+arr2[i][j]
    }
}

console.log(result)