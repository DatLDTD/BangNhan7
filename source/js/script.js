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
        title: "Cách lập bảng nhân 7",
        status: "deactive"
    },
    {
        img: "slide-4.PNG",
        title: "Ghi nhớ: Các cách lập bảng nhân",
        status: "deactive"
    },
    {
        img: "slide-5.PNG",
        title: "Bảng nhân 7",
        status: "deactive"
    },
    {
        img: "slide-6.PNG",
        title: "Làm việc nhóm",
        status: "deactive"
    },
    {
        img: "slide-7.PNG",
        title: "Vòng quay may mắn",
        status: "deactive"
    },
    {
        img: "slide-8.PNG",
        title: "Bài tập 1",
        status: "deactive"
    },
    {
        img: "slide-9.PNG",
        title: "Bài tập 2",
        status: "deactive"
    },
    {
        img: "slide-10.PNG",
        title: "Bài tập 3",
        status: "deactive"
    },
    {
        img: "slide-11.PNG",
        title: "Câu đố hình học",
        status: "deactive"
    },
    {
        img: "slide-12.PNG",
        title: "Bài tập 4",
        status: "deactive"
    },
    {
        img: "slide-13.PNG",
        title: "Dặn dò về nhà",
        status: "deactive"
    }
]
var timer;
var timerSpin;
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
    clearTimeout(timerSpin)
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
    document.querySelector('.notice').classList.remove('true')
    document.querySelector('.notice').classList.remove('false')
    document.querySelector('.filter').classList.remove('active')
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
    document.querySelectorAll('#slide-3 input.result').forEach((input, index) => {
        input.value = '';
        document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.remove('false')
        document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.remove('true')
    })
    document.querySelector('#slide-3 .btn-result').addEventListener('click', () => {
        document.querySelector('.filter').classList.add('active')
        document.querySelectorAll('#slide-3 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelectorAll('#slide-3 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.add(`${input.value == parseInt(input.getAttribute('id'))}`)
        })
        if (document.querySelectorAll('#slide-3 .result-wrapper.false').length > 0) {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Chưa đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn nút để làm lại nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Làm lại"
            document.querySelector('.notice').classList.add('false')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('false')
                if (document.querySelectorAll('#slide-3 .result-wrapper.false').length > 0)
                    document.querySelectorAll('#slide-3 input.result').forEach((input, index) => {
                        input.value = ''
                        document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.remove('false')
                        document.querySelectorAll('#slide-3 .result-wrapper')[index].classList.remove('true')
                    })
            })
        } else {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Đúng hết rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn tiếp tục và chuyển sang bài tiếp theo thôi."
            document.querySelector('.notice').querySelector('button').innerHTML = "Tiếp tục"
            document.querySelector('.notice').classList.add('true')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('true')
                document.querySelector('.btn-next').classList.remove('deactive')
            })
        }
    })
}
function renderSlide4() {
    timer = setTimeout(() => {
        document.querySelector('.btn-next').classList.remove('deactive')
    }, 14000)
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
    var x
    document.querySelector('#btnspin').classList.add('active')
    document.querySelector('#btnspin').disabled = false
    document.querySelector('#slide-7 .spin-wrapper').classList.remove('active')
    document.querySelector('#slide-7 .spin-container .arrow-container').classList.add('active')
    document.querySelector('#slide-7 .question .random').innerHTML = '...'
    document.querySelector('#slide-7 .spin-wrapper').classList.remove('active')
    document.getElementById('spinwrapper').style.transform = "rotate(0)"
    document.querySelector('#btnspin').addEventListener('click', () => {
        clearTimeout(timerSpin)
        document.querySelector('#slide-7 .spin-container .arrow-container').classList.remove('active')
        x = Math.floor(Math.random() * 10)
        document.querySelectorAll('#slide-7 input.result').forEach((input, index) => {
            input.value = ''
            document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelector('#slide-7 .spin-wrapper').classList.remove('active')
        document.getElementById('spinwrapper').style.transform = "rotate(0)"
        document.querySelector('#slide-7 .question .random').innerHTML = '...'
        console.log(x);
        document.querySelector('#btnspin').disabled = true
        document.querySelector('#btnspin').classList.remove('active')
        document.querySelector('#slide-7 .spin-wrapper').classList.add('active')
        document.getElementById('spinwrapper').style.transform = `rotate(${2160 - x * 36}deg)`
        timerSpin = setTimeout(() => {
            document.querySelector('#btnspin').disabled = false
            document.querySelector('#btnspin').classList.add('active')
            document.querySelector('#slide-7 .question .random').innerHTML = x + 1
            setTimeout(() => { document.querySelector('#slide-7 .spin-container .arrow-container').classList.add('active') }, 500)
        }, 5000)
    })
    document.querySelectorAll('#slide-7 input.result').forEach((input, index) => {
        input.value = '';
        document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('false')
        document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('true')
    })
    document.querySelector('#slide-7 .btn-result').addEventListener('click', () => {
        document.querySelector('.filter').classList.add('active')
        document.querySelectorAll('#slide-7 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelectorAll('#slide-7 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.add(`${input.value == 7 * (x + 1)}`)
        })
        if (document.querySelectorAll('#slide-7 .result-wrapper.false').length > 0) {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Chưa đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn nút để làm lại nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Làm lại"
            document.querySelector('.notice').classList.add('false')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('false')
                if (document.querySelectorAll('#slide-7 .result-wrapper.false').length > 0)
                    document.querySelectorAll('#slide-7 input.result').forEach((input, index) => {
                        input.value = ''
                        document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('false')
                        document.querySelectorAll('#slide-7 .result-wrapper')[index].classList.remove('true')
                    })
            })
        } else {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Làm thêm vài lần cho chắc nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Tiếp tục"
            document.querySelector('.notice').classList.add('true')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('true')
                document.querySelector('.btn-next').classList.remove('deactive')
            })
        }
    })
}
function renderSlide8() {
    document.querySelectorAll('#slide-8 input.result').forEach((input, index) => {
        input.value = '';
        document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.remove('false')
        document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.remove('true')
    })
    document.querySelector('#slide-8 .btn-result').addEventListener('click', () => {
        document.querySelector('.filter').classList.add('active')
        document.querySelectorAll('#slide-8 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelectorAll('#slide-8 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.add(`${input.value == parseInt(input.getAttribute('id'))}`)
        })
        if (document.querySelectorAll('#slide-8 .result-wrapper.false').length > 0) {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Chưa đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn nút để làm lại nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Làm lại"
            document.querySelector('.notice').classList.add('false')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('false')
                if (document.querySelectorAll('#slide-8 .result-wrapper.false').length > 0)
                    document.querySelectorAll('#slide-8 input.result').forEach((input, index) => {
                        input.value = ''
                        document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.remove('false')
                        document.querySelectorAll('#slide-8 .result-wrapper')[index].classList.remove('true')
                    })
            })
        } else {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Đúng hết rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn tiếp tục và chuyển sang bài tiếp theo thôi."
            document.querySelector('.notice').querySelector('button').innerHTML = "Tiếp tục"
            document.querySelector('.notice').classList.add('true')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('true')
                document.querySelector('.btn-next').classList.remove('deactive')
            })
        }
    })
}
function renderSlide9() {
    document.querySelectorAll('#slide-9 input.result').forEach((input, index) => {
        input.value = '';
        document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.remove('false')
        document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.remove('true')
    })
    document.querySelector('#slide-9 .btn-result').addEventListener('click', () => {
        document.querySelector('.filter').classList.add('active')
        document.querySelectorAll('#slide-9 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelectorAll('#slide-9 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.add(`${input.value == parseInt(input.getAttribute('id'))}`)
        })
        if (document.querySelectorAll('#slide-9 .result-wrapper.false').length > 0) {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Chưa đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn nút để làm lại nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Làm lại"
            document.querySelector('.notice').classList.add('false')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('false')
                if (document.querySelectorAll('#slide-9 .result-wrapper.false').length > 0)
                    document.querySelectorAll('#slide-9 input.result').forEach((input, index) => {
                        input.value = ''
                        document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.remove('false')
                        document.querySelectorAll('#slide-9 .result-wrapper')[index].classList.remove('true')
                    })
            })
        } else {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Đúng hết rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn tiếp tục và chuyển sang bài tiếp theo thôi."
            document.querySelector('.notice').querySelector('button').innerHTML = "Tiếp tục"
            document.querySelector('.notice').classList.add('true')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('true')
                document.querySelector('.btn-next').classList.remove('deactive')
            })
        }
    })
}
function renderSlide10() {
    document.querySelectorAll('#slide-10 input.result').forEach((input, index) => {
        input.value = '';
        document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.remove('false')
        document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.remove('true')
    })
    document.querySelector('#slide-10 .btn-result').addEventListener('click', () => {
        document.querySelector('.filter').classList.add('active')
        document.querySelectorAll('#slide-10 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelectorAll('#slide-10 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.add(`${input.value == parseInt(input.getAttribute('id'))}`)
        })
        if (document.querySelectorAll('#slide-10 .result-wrapper.false').length > 0) {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Chưa đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn nút để làm lại nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Làm lại"
            document.querySelector('.notice').classList.add('false')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('false')
                if (document.querySelectorAll('#slide-10 .result-wrapper.false').length > 0)
                    document.querySelectorAll('#slide-10 input.result').forEach((input, index) => {
                        input.value = ''
                        document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.remove('false')
                        document.querySelectorAll('#slide-10 .result-wrapper')[index].classList.remove('true')
                    })
            })
        } else {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Đúng hết rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn tiếp tục và chuyển sang bài tiếp theo thôi."
            document.querySelector('.notice').querySelector('button').innerHTML = "Tiếp tục"
            document.querySelector('.notice').classList.add('true')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('true')
                document.querySelector('.btn-next').classList.remove('deactive')
            })
        }
    })
}
function renderSlide11() {
    document.querySelectorAll('#slide-11 input.result').forEach((input, index) => {
        input.value = '';
        document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.remove('false')
        document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.remove('true')
    })
    document.querySelector('#slide-11 .btn-result').addEventListener('click', () => {
        document.querySelector('.filter').classList.add('active')
        document.querySelectorAll('#slide-11 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.remove('true')
            document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.remove('false')
        })
        document.querySelectorAll('#slide-11 input.result').forEach((input, index) => {
            document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.add(`${input.value == parseInt(input.getAttribute('id'))}`)
        })
        if (document.querySelectorAll('#slide-11 .result-wrapper.false').length > 0) {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Chưa đúng rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn nút để làm lại nhé."
            document.querySelector('.notice').querySelector('button').innerHTML = "Làm lại"
            document.querySelector('.notice').classList.add('false')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('false')
                if (document.querySelectorAll('#slide-11 .result-wrapper.false').length > 0)
                    document.querySelectorAll('#slide-11 input.result').forEach((input, index) => {
                        input.value = ''
                        document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.remove('false')
                        document.querySelectorAll('#slide-11 .result-wrapper')[index].classList.remove('true')
                    })
            })
        } else {
            document.querySelector('.notice').querySelector('h1').innerHTML = "Đúng hết rồi !!!"
            document.querySelector('.notice').querySelector('h2').innerHTML = "Ấn tiếp tục và chuyển sang bài tiếp theo thôi."
            document.querySelector('.notice').querySelector('button').innerHTML = "Tiếp tục"
            document.querySelector('.notice').classList.add('true')
            document.querySelector('.notice').querySelector('button').addEventListener('click', () => {
                document.querySelector('.filter').classList.remove('active')
                document.querySelector('.notice').classList.remove('true')
                document.querySelector('.btn-next').classList.remove('deactive')
            })
        }
    })
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


