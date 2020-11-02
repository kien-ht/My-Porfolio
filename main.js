function $(element) {
    return document.querySelector(element);
}

function $all(element) {
    return document.querySelectorAll(element);
}

var birdPosition, myAvatar, haTrung, kien, webDeveloper;
var currentLang = 'en';

function moveHeader(e) {
    let clientX = -e.clientX + screen.width/2;
    let clientY = -e.clientY + screen.height/2;
    let scaleRatio = Math.sqrt(Math.pow(clientX,2) + Math.pow(clientY,2));

    for (let i = 1; i <= 5; i++) {
        $(`.bird-${i}`).style.left = birdPosition[i]['left'] + clientX/birdPosition[i]['ratioX'] + 'px';
        $(`.bird-${i}`).style.top = birdPosition[i]['top'] + clientY/birdPosition[i]['ratioY'] + 'px';
        $(`.bird-${i}`).style.transform = `scale(${1 + scaleRatio/birdPosition[i]['scale']})`;
    }

}

function moveAboutMe(e) {
    let clientX = -e.clientX/2 - e.clientY/2 + screen.width/2;

    $('#my-avatar').style.left = myAvatar['left'] + clientX/myAvatar['ratioX'] + 'px';
    $('.ha-trung').style.left = haTrung['left'] + clientX/haTrung['ratioX'] + 'px';
    $('.kien').style.left = kien['left'] + clientX/kien['ratioX'] + 'px';
    $('.web-developer').style.left = webDeveloper['left'] + clientX/webDeveloper['ratioX'] + 'px';

}

function resizeHandler(input, id) {
    if (input.value.length !== 0) {
        input.style.width = input.value.length + 'ch';
    } else input.style.width = hireMeInput[id][currentLang].length + 'ch';
}

//language changing
$('#checkbox').addEventListener('click', (event) => {
    if (event.target.checked) { //if vietnam is chosen
        currentLang = 'vi';
    } else { //if english is chosen
        currentLang = 'en';
    }
    updateLanguage(currentLang);
})

//introduction text animation

function typingAnimation(lang) {

    let text = $(`.${lang}-intro`).textContent;
    function typing(text) {
        let typing = '';
        $(`.${lang}-intro`).textContent = typing;
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                typing += text[i];
                $(`.${lang}-intro`).textContent = typing;
            }, i*35)
        }
    }
    typing(text);
    setInterval(() => {
        typing(text);
    }, 5500)

}

function updateLanguage(language) {

    // async function reload() {
    //     await location.reload();
    //     window.stop();

    // }    

    //update language
    $('#container').innerHTML = translate(language);

    birdPosition = {
        1: { 
            left: $('.bird-1').offsetLeft, 
            top: $('.bird-1').offsetTop,
            ratioX: -40,
            ratioY: 20,
            scale: 3200,
        },
        2: { 
            left: $('.bird-2').offsetLeft, 
            top: $('.bird-2').offsetTop,
            ratioX: 8,
            ratioY: 10,
            scale: 2900,
        },
        3: { 
            left: $('.bird-3').offsetLeft, 
            top: $('.bird-3').offsetTop,
            ratioX: -25,
            ratioY: 20,
            scale: 2700,
        },
        4: { 
            left: $('.bird-4').offsetLeft, 
            top: $('.bird-4').offsetTop,
            ratioX: 15,
            ratioY: -20,
            scale: 3200,
        },
        5: { 
            left: $('.bird-5').offsetLeft, 
            top: $('.bird-5').offsetTop,
            ratioX: -50,
            ratioY: -30,
            scale: 3200,
        },
    }

    myAvatar = {
        left: 0,
        // left: $('#my-avatar').offsetLeft,
        ratioX: 35,
    }
    haTrung = {
        left: 0,
        // left: $('.ha-trung').offsetLeft,
        ratioX: 20,
    }
    kien = {
        left: 0,
        // left: $('.kien').offsetLeft,
        ratioX: 25,
    }
    webDeveloper = {
        left: 0,
        // left: $('.web-developer').offsetLeft,
        ratioX: 10,
    }

    //add event listener for elements
    $('#head-section').addEventListener('mousemove', moveHeader);
    $('#about-me-section').addEventListener('mousemove', moveAboutMe);

    $all('.hireMeLinks').forEach(item => {
        item.addEventListener('click', () => {
            window.scrollBy(0, 5000)
        })
    })

    $all('.input').forEach(item => {
        item.addEventListener('input', (event) => {
            let id = event.target.id.split('-')[1];
            resizeHandler(event.target, id);
        })
    })


    //resize input text area
    for (let i = 0; i < 4; i++) {
        resizeHandler($all('.input')[i], i);
    }


    let obj = {
        en: 'vi',
        vi: 'en'
    }
    $(`.${language}-intro`).style.display = 'block';
    $(`.${obj[language]}-intro`).style.display = 'none';

    //run the AOS library
    AOS.init();
}

updateLanguage('en');

// //run the typing animation
typingAnimation('en');
typingAnimation('vi');

//thu thập input thực tế

//up 2 project lên github và link lại