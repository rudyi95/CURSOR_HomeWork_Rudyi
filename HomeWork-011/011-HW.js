function getNum() {
    const numb = new Promise(num => {
        setTimeout(() => {
            +num(String.fromCharCode(Date.now().toString().slice(-5)))
        }, 50)
    })
    return numb;
}

async function getRandomChinese(length) {
    i = 0;
    let word = '';
    while (length > i) {
        i++;
        word += await getNum(i);
    }
    return word
}

getRandomChinese(4)
    .then(res => {
        console.log(res);
    })