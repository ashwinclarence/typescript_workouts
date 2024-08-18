let teacherName: string | null = null;


function get() {
    if (teacherName) {
        return teacherName;
    } else if(teacherName===null) {
        return "This return null";
    }
}