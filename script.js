function calculate()
{
    let m1=Number(document.getElementById("m1").value);
    let m2=Number(document.getElementById("m2").value);
    let m3=Number(document.getElementById("m3").value);
    let m4=Number(document.getElementById("m4").value);
    let m5=Number(document.getElementById("m5").value);

    let total=m1+m2+m3+m4+m5;
    let average=total/5;
    let grade="";
    if(average>=90)grade = "Grade: A-Excellent";
    else if(average>=75)grade ="Grade: B- Very Good";
    else if(average>=50)grade ="Grade: C-Good";
    else grade = "Grade: Fail - Try Again";

    document.getElementById("result").innerText="Total:"+total+"| Average: "+average;
    document.getElementById("grade").innerText=grade;
}