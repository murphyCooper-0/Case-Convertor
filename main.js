String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function convertUpper(){
    document.getElementById("text-area").value = document.getElementById("text-area").value.toUpperCase();
}

function convertLower(){
    document.getElementById("text-area").value = document.getElementById("text-area").value.toLowerCase();
}

function convertProper(){
    let p_case = document.getElementById("text-area").value.toLowerCase();
    p_case = p_case.replaceAt(0, p_case.charAt(0).toUpperCase());
    for(let i = 0; i < p_case.length; i++){
        if(p_case.charAt(i) == " "){
            p_case = p_case.replaceAt(i+1, p_case.charAt(i+1).toUpperCase());
        }
    }
    document.getElementById("text-area").value = p_case;
}

function convertSentence(){
    let s_case = document.getElementById("text-area").value.toLowerCase();
    s_case = s_case.replaceAt(0, s_case.charAt(0).toUpperCase());
    for(let i = 1; i < s_case.length; i++){
        if(s_case.charAt(i) == "." || s_case.charAt(i) == "?"){
            let count = 1;
            let x = i;
            while (true){
                if(s_case.charAt(x+1) == " "){
                    count++;
                    x++;
                } else {
                    s_case = s_case.replaceAt(i+count, s_case.charAt(i+count).toUpperCase());
                    break;
                }
            }
        }
    }
    document.getElementById("text-area").value = s_case;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let uc = document.getElementById("upper-case");
let lc = document.getElementById("lower-case");
let pc = document.getElementById("proper-case");
let sc = document.getElementById("sentence-case");
let dl = document.getElementById("save-text-file");

uc.addEventListener("click", convertUpper);
lc.addEventListener("click", convertLower);
pc.addEventListener("click", convertProper);
sc.addEventListener("click", convertSentence);
dl.addEventListener("click", function(){ download("text.txt", document.getElementById("text-area").value); });