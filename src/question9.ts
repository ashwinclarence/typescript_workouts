

function printPattern(limit: number) {
    for (let i = 1; i <= limit; i++){
        let row = '';
        for (let j = 1; j <= i; j++){
            row += j + ' ';
        }
        console.log(row.trim());
    }
}

printPattern(5)