var answer = document.getElementById('answer');
answer.focus
function display(value) {
    answer.value += value;
}
function ce() {
    document.form.answer.value = document.form.answer.value.substr(0, form.answer.value.length - 1)
    focus()
}
function ac() {
    document.getElementById("answer").value = "";
    focus()
}
function theResult() {
    var a = document.getElementById("answer").value;
    var b = eval(a);
    document.getElementById("answer").value = b;
}
function focus() {
    answer.focus()
}