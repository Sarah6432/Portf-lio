const text = "FullStack Developer.";
const element = document.getElementById("center-page");
let i = 0;

function typing() {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}

window.load = typing();

const text2 = "From the first ‘What if?’ to the final ‘It’s alive!’, I bridge imagination and reality through code that’s smart, playful, and relentlessly human. Let’s build not just apps, but joy.";
const element2 = document.getElementById("center-page-p");
let j = 0;

function typing2() {
    if (j < text2.length) {
        element2.innerHTML += text2.charAt(j);
        j++;
        setTimeout(typing2, 70);
    }

}
window.load = typing2();

function Projeto1(){
    window.open("https://greenflow-nine.vercel.app");
}