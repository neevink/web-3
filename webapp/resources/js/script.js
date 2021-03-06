const minX = -5, maxX = 3;
const minY = -3, maxY = 3;
const minR = 1, maxR = 5;
var x = -5, y = 0, r = 1;

//document.getElementById('main-form:x').value = minX;
//document.getElementById('main-form:r').value = minR;
/*
$(document).ready(function () {
    while (graph === null){

    }
    graph.append('circle')
        .attr('r', 4)
        .attr('cx', 150)
        .attr('cy', 150)
        .attr('fill', 'red')
        .attr('stroke', 'red');
});
 */

function setX(newX){
    document.getElementById('main-form:x').value = newX;

    for(let i = minX; i <= maxX; i++){
        let btn = document.getElementById('x' + i)
        btn.classList.remove('button-selected');
        btn.classList.add('button');
    }

    let btn = document.getElementById('x' + newX)
    btn.classList.remove('button');
    btn.classList.add('button-selected');
}

function setR(newR){
    document.getElementById('main-form:r').value = newR;

    for(let i = minR; i <= maxR; i++){
        let btn = document.getElementById('r' + i);
        btn.classList.remove('link-selected');
        btn.classList.add('link');
    }

    let btn = document.getElementById('r' + newR);
    btn.classList.remove('link');
    btn.classList.add('link-selected');

    redrawGraph();
}

function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}

function isInt(val){
    return /^-?[0-9]{1,10}$/.test(val);
}

function isFloat(val){
    return /^-?[0-9]{0,6}(.|,)[0-9]{0,5}$/.test(val);
}

function validateX(xNum) {
    if (isNumeric(xNum) && isFloat(xNum) && minX <= xNum && xNum <= maxX) {
        x = xNum;
        return true;
    }
    return false;
}

function validateY(yNum) {
    if (isNumeric(yNum) && isInt(yNum) && minY <= yNum && yNum <= maxY) {
        y = yNum;
        return true;
    }
    return false;
}

function validateR(rNum) {
    return !!(isNumeric(rNum) && isInt(rNum) && minR <= rNum && rNum <= maxR);
}

function validateForm(){
    let yNum = $('#y').val();
    let xNum = $('#x').val().replace(',', '.');
    let rNum = $('#r').val();
    msg = '';

    if(!validateX(xNum)){
        msg += '?? ???????? X ???????????? ???????? ?????????? ???? -3 ???? 3 ?? ???? ?????????? ?????? ?????????? ?????????????? ?????????? ??????????????\n';
    }
    if(!validateY(yNum)){
        msg += '???????????? ???????? ?????????????? ???????????????? ???????? Y\n';
    }
    if(!validateR(rNum)){
        msg += '???????????? ???????? ?????????????? ???????????????? ???????? R\n';
    }

    if(msg !== ''){
        alert(msg);
        return false;
    }
    else{
        y = yNum;
        x = xNum;
        r = rNum;
        //alert('x = ' + x + ', y = ' + y + ',r = ' + r);
        return true;
    }
}

function handleSendButtonClick(event){
    if(/*validateForm()*/ true){
        addPoint(x, y, r);
    }
}

function clickedSendForm(){
    console.log('clicked send form!');
    console.log(`${x} ${y} ${r}`)
/*
    document.getElementById('main-form:x').value = x;
    document.getElementById('main-form:y').value = y;
    document.getElementById('main-form:r').value = r;
 */
}