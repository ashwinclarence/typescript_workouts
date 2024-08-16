function gradeDisplay(mark: number): string {
    if (mark > 90) {
        return "A";
    } else if (mark > 80) {
        return "B";
    } else if (mark > 70) {
        return "C";
    } else if (mark > 60) {
        return "D";
    } else if(mark>50){
        return "E";
    } else {
        return "F";
    }
}

console.log(gradeDisplay(56)); 
