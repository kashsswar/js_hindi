const course={
    courseName:"js in hindi",
    price:"9339",
    courseInstructor:"Karishma"
}

//course.courseInstructor....we dont want this all the time
//so we will destructor the array

const {courseInstructor: instructor} =course //yahan pr courseInstructor ka nam bada so instructor use karenge uskin jagah

console.log(instructor)