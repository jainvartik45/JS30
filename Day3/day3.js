// const second_hand = document.getElementById("line_sec");

function new_effect(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const degree_sec = sec * 6 + 90;
    const degree_min = min * 6 + 90;
    const degree_hr = hr * 30 + 90;

    const sec_line = document.getElementById("line_sec");
    const min_line = document.getElementById("line_min");
    const hr_line = document.getElementById("line_hr");

    sec_line.style.transform = `rotate(${degree_sec}deg)`;
    min_line.style.transform = `rotate(${degree_min}deg)`;
    hr_line.style.transform = `rotate(${degree_hr}deg)`;

}



setInterval(new_effect , 1000);