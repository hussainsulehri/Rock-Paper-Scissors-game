const choices = document.querySelectorAll(".choice");
const u_score = document.querySelector("#user-score");
const c_score = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
let count_u = 0;
let count_c = 0;
const c_choice = () => {
    const options = ["rock","paper","scissors"];
    const random_i = Math.floor(Math.random() * 3);
    return options[random_i];
};
const draw = () => {
    msg.innerText = "Draw :)";
    msg.style.backgroundColor = "#081b31";
};
const show_winner = (user_win,u_choice,co_choice) =>{
    if(user_win){
        count_u++;
        msg.innerText = `You won! ${u_choice} beats ${co_choice}`;
        msg.style.backgroundColor = "green";
        u_score.innerText = (count_u);
    }else{
        count_c++;
        msg.innerText = `Computer won ${co_choice} beats ${u_choice}`;
        msg.style.backgroundColor = "red";
        c_score.innerText = (count_c);
    }
};
let user_win = true;
const playgame = (u_choice) => {
    console.log("Your choice : ",u_choice);
    const co_choice = c_choice();
    console.log("Comp choice : ",co_choice);
    if(u_choice === co_choice){
             draw();
    }else{
        if(u_choice === "rock"){
           user_win = co_choice === "paper" ? false : true; 
        }
        else if(u_choice === "paper"){
            user_win = co_choice === "scissors" ? false : true;
        }
        else{
            user_win = co_choice === "rock" ? false : true;
        }
    }
    show_winner(user_win,u_choice,co_choice);
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const u_choice = choice.getAttribute("id");
        playgame(u_choice);
    })
});