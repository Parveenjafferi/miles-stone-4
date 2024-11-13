// listing element
document.getElementById('resumeform')?.addEventListener('submit',function(event)){
Event.preventDefault();


// type assertion
const nameElement=document.getElementById('name') as HTMLinputElement;
const emailElement=document.getElementById('email') as HTMLinputElement;
const phoneElement=document.getElementById('phone') as HTMLinputElement;
const educationElement=document.getElementById('education') as HTMLinputElement;
const experienceElement=document.getElementById('experience') as HTMLinputElement;
const skillsElement=document.getElementById('skills') as HTMLinputElement;

if (nameElement && emailElement && phoneElement && educationElement && experienceElement &&skillsElement)
    const name= nameElement.Value;
const email= emailElement.Value;
const phone= phoneElement.Value;
const education= educationElement.Value;
const experience= experienceElement.Value;
const skills= skillsElement.Value;


// create resume output
const resumeOutput =
    <h2> Resume</h2>
<p><strong> Name:</strong>${name}</p>
<p><strong> Email:</strong>${email}</p>
<p><strong> Phone Number:</strong>${phone}</p>

<h3> Education</h3>
<p>${education}</p>

<h3> Experience</h3>
<p>${experienec}</p>

<h3> Skills</h3>
<p>${skills}</p>;

const resumeOutputElement=document.getElementById('resumeOutput')
if(resumeOutput){
    resumeOutputElement.innerHTML=resumeOutput
}
else{
    console.error('the resume output elements are missing')
}
else{
    console.error('one or more output elements are missing')
}

}
)