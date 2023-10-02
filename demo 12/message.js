const message = () => {
    const header = "<div style='text-align: center;'><h1>Personal Information</></div>";
    const name = "Clay Aiken Mangeber Jr";
    const age = 19;
    const status = "Ada";
    const major = "Infomatics";
    const faculty = "Computer Science";
    const addres = "Asrama Crystal";
    const interest = "Programmer"
    
    return header + "<hr>" + "<strong>Name : </strong>" +name + "<br><strong>Age : </strong>" + age  + "<br><strong>Status : </strong>" + status + "<br><strong>Major : </strong>" + major + "<br><strong>faculty : </strong>" + faculty + "<br><strong>Addres : </strong>" +addres + "<br><strong>Interest : </strong>" + interest;
};

export default message;