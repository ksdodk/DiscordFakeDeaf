var button = document.createElement('button');
button.appendChild(document.createElement("div"))
button.classList.add("ttt");
button.setAttribute("class", "button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F")
button.innerHTML = '<div class="contents-3ca1mk"><svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="#00e22c"></path></svg></div>'
var element = document.querySelector(".actionButtons-2vEOUh");


element.appendChild(button);


button.addEventListener("click", function () {
    fakedeaf();
});


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fakedeaf() {
    let i = 0;
    do {
    i += 1;                     
    document.querySelector("button[aria-label=\"Deafen\"]").click();
    await sleep(25)
    } while (i < 30);
}
