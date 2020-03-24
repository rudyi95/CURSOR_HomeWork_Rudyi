function* createIdGenerator(){
    let i = 1;
    while(true){
        yield i++;
    }
}
const idGenerator = createIdGenerator();

document.write(`<p>idGenerator:<br>
${idGenerator.next().value}<br>
${idGenerator.next().value}<br>
${idGenerator.next().value}<br>
`);



function* newFontGenerator(sizeDirection){
    while(true){
        let size = yield sizeDirection;
        if(size === "up"){
            sizeDirection +=2;
            /* document.body.style.fontSize = sizeDirection + 'px'; */
        }else if(size === 'down'){
            sizeDirection -=2;
            
        }
    }
}
const fontGenerator = newFontGenerator(14);

document.write(`<p>fontGenerator:<br>
14 = ${fontGenerator.next("up").value}<br>
16 = ${fontGenerator.next("up").value}<br>
18 = ${fontGenerator.next("up").value}<br>
18 = ${fontGenerator.next().value}<br>
16 = ${fontGenerator.next("down").value}<br>
14 = ${fontGenerator.next("down").value}<br>
12 = ${fontGenerator.next("down").value}<br>
12 = ${fontGenerator.next().value}<br>
`)
