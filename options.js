function saveOptions(e) {
    e.preventDefault();
    let custom_css = document.querySelector("#custom_css").value;
    browser.storage.local.set({custom_css: custom_css});
}
function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#custom_css").value = result.custom_css || "";
    }
    
    function onError(error) {
        console.log(`Error: ${error}`);
    }
    let getting = browser.storage.local.get("custom_css");
    getting.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
