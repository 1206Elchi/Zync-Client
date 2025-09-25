// placeholder.
// TODO: replace with actual functionality for app -> renderer communication
// as the folder name should tell you
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ["chrome", "node", "electron"])
        replaceText(`${type}Version`, process.versions[type]);
});
