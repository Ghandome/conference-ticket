const button = document.querySelector("#submit");
const ticket = document.querySelector(".generated-ticket");
const avatar = document.getElementById("avatar");
const formerButton = document.querySelector(".former");
const main = document.querySelector(".main-page");


button.addEventListener("click", (e)=> {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const githubName = document.getElementById("hub").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const githubNameRegex = /^[a-zA-Z0-9_@-]{1,39}$/;

    
    if(!githubNameRegex.test(githubName)) {
        alert("Invalid github username, Please enter a valid username");
    }

    if(!emailRegex.test(email)) {
        alert("Invalid email address, Please enter a valid email address");
    }

    if(name && email && githubName && avatar.files.length > 0) {
        ticket.style.display = "block";
        main.style.display = "none";

        document.querySelector(".kris").textContent = name;
        document.querySelector(".nomk").textContent = name;
        document.querySelector("#kris").textContent = email;
        document.querySelector("#nomk").textContent = `${githubName}`;
        const img = document.querySelector(".man");
        img.src = URL.createObjectURL(avatar.files[0]);
    } else {
        alert("Please fill in all required fields.");
    }

})

formerButton.addEventListener("click", ()=> {
    avatar.click()
})
