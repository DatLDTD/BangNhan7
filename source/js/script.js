var tableContent = [
    {
        img: "slide-1.PNG",
        title: "Mở đầu",
        status: "canactive"
    },
    {
        img: "slide-2.PNG",
        title: "Mục tiêu bài học",
        status: "deactive"
    },
    {
        img: "slide-3.PNG",
        title: "Bảng nhân 7",
        status: "deactive"
    },
    {
        img: "slide-4.PNG",
        title: "Slide 4",
        status: "deactive"
    },
    {
        img: "slide-5.PNG",
        title: "Slide 5",
        status: "deactive"
    },
    {
        img: "slide-6.PNG",
        title: "Slide 6",
        status: "deactive"
    },
    {
        img: "slide-7.PNG",
        title: "Slide 7",
        status: "deactive"
    },
    {
        img: "slide-8.PNG",
        title: "Slide 8",
        status: "deactive"
    },
    {
        img: "slide-9.PNG",
        title: "Slide 9",
        status: "deactive"
    },
    {
        img: "slide-10.PNG",
        title: "Slide 10",
        status: "deactive"
    },
    {
        img: "slide-11.PNG",
        title: "Slide 11",
        status: "deactive"
    },
    {
        img: "slide-12.PNG",
        title: "Slide 12",
        status: "deactive"
    },
    {
        img: "slide-13.PNG",
        title: "Slide 13",
        status: "deactive"
    }
]
var timer;
var currentSlide = sessionStorage.getItem("currentSlide") ? parseInt(sessionStorage.getItem("currentSlide")) : 0;;
var maxSlide = sessionStorage.getItem("maxSlide") ? parseInt(sessionStorage.getItem("maxSlide")) : 0;
var contentContainer = document.querySelector('.content-container');
function clickButtonPrev() {
    setSlide(currentSlide - 1);
    activeSlide()
}
function clickButtonReload() {
    activeSlide()
}
function clickButtonNext() {
    setSlide(currentSlide + 1);
    activeSlide()
}
function activeSlide() {
    clearTimeout(timer)
    tableContent.forEach((item, index) => {
        item.status = 'deactive';
        if (index <= maxSlide) {
            item.status = 'canactive'
        }
    })
    tableContent[currentSlide].status = 'active';
    renderTableContent();
    addEvent();
    onSwitchSLide();
}
activeSlide();
function renderTableContent() {
    contentContainer.innerHTML = '';
    tableContent.forEach((item, index) => {
        contentContainer.innerHTML += `<div class="content-wrapper ${item.status}">
    <img src="./source/images/${item.img}" alt="img">
    <p>${index + 1}. ${item.title}</p>
    </div>
    `;
    })
}
function addEvent() {
    document.querySelectorAll('.content-wrapper:not(.deactive)').forEach((item, index) => {
        item.addEventListener('click', function click() {
            setSlide(index);
            activeSlide();
        })
    })
}
function onSwitchSLide() {
    document.querySelectorAll('.slide-wrapper .slide').forEach(item => {
        item.classList.remove('active')
    })
    document.querySelectorAll('.content-wrapper').forEach(item => {
        item.classList.remove('active')
    })
    setTimeout(() => {
        document.querySelectorAll('.slide-wrapper .slide')[currentSlide].classList.add('active')
        document.querySelectorAll('.content-wrapper')[currentSlide].classList.add('active')
    }, 0)
    if (currentSlide == 0) {
        document.querySelector('.btn-prev').classList.add('deactive');
    }
    else {
        document.querySelector('.btn-prev').classList.remove('deactive');
    }
    if (tableContent[currentSlide + 1].status == 'deactive') {
        document.querySelector('.btn-next').classList.add('deactive')
    } else {
        document.querySelector('.btn-next').classList.remove('deactive')
    }
    callFunctionRenderSlide();
}
function setSlide(number) {
    currentSlide = number
    sessionStorage.setItem("currentSlide", currentSlide)
    if (currentSlide > maxSlide) {
        maxSlide = currentSlide
        sessionStorage.setItem("maxSlide", maxSlide)
    }
}
function callFunctionRenderSlide() {
    switch (currentSlide) {
        case 0: {
            renderSlide1();
            break;
        }
        case 1: {
            renderSlide2();
            break;
        }
        case 2: {
            renderSlide3();
            break;
        }
        case 3: {
            renderSlide4();
            break;
        }
        case 4: {
            renderSlide5();
            break;
        }
        case 5: {
            renderSlide6();
            break;
        }
        case 6: {
            renderSlide7();
            break;
        }
        case 7: {
            renderSlide8();
            break;
        }
        case 8: {
            renderSlide9();
            break;
        }
        case 9: {
            renderSlide10();
            break;
        }
        case 10: {
            renderSlide11();
            break;
        }
        case 11: {
            renderSlide12();
            break;
        }
        case 12: {
            renderSlide13();
            break;
        }
        default: {
            break;
        }
    }
}
function renderSlide1() {
    timer = setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 7000)
}
function renderSlide2() {
    timer = setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 14000)
}
function renderSlide3() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide4() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide5() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide6() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide7() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide8() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide9() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide10() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide11() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}
function renderSlide12() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}

function renderSlide13() {
    setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 0)
}


