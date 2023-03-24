function clearForm(id) {
    document.getElementById(id).value = "";
}

function runCode() {
    var htmlCode = document.getElementById("html-code").value;
    var cssCode = document.getElementById("css-code").value;
    var jsCode = document.getElementById("js-code").value;

    var output = document.getElementById("output");
    output.srcdoc = "<html><head><style>" + cssCode + "</style></head><body>" + htmlCode + "<script>" + jsCode + "</script></body></html>";
}
