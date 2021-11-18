const minX = -5, maxX = 3;
const minY = -3, maxY = 3;
const minR = 1, maxR = 5;
var x = -5, y = 0, r = 1;


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
        msg += 'В поле X должно быть число от -3 до 3 с не более чем пятью знаками после запятой\n';
    }
    if(!validateY(yNum)){
        msg += 'Должно быть выбрано значение поля Y\n';
    }
    if(!validateR(rNum)){
        msg += 'Должно быть выбрано значение поля R\n';
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

function clickedSendForm(){
    console.log('clicked send form!');
    console.log(`${x} ${y} ${r}`)
/*
    document.getElementById('main-form:x').value = x;
    document.getElementById('main-form:y').value = y;
    document.getElementById('main-form:r').value = r;
 */
}