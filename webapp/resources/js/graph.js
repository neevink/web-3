var graph, graphElem;

const W = 300, H = 300;
const LINE_LENGTH = 2;
const W2 = W / 2, H2 = H / 2;
const R = 60;
const TEXT_OFFSET = 6;
const TEXT_X = W2 + TEXT_OFFSET, TEXT_Y = H2 - TEXT_OFFSET;

const OPACITY = 1, FILL = '#3398fd', COLOR = '#000000', STROKE = '';
const GREEN = "#32CD32", RED = "#DC143C";

// Оси и отметки
let lines = [[0, H2, W, H2], [W2, 0, W2, H]];
for (let n = 1; n <= 2; n++) {
    for (let i = -1; i <= 1; i += 2) {
        let dx = W2 + i * n * R, dy = W2 + i * n * R
        lines.push([dx, H2 - LINE_LENGTH, dx, H2 + LINE_LENGTH])
        lines.push([W2 - LINE_LENGTH, dy, W2 + LINE_LENGTH, dy])
    }
}

// Надписи
let texts = [
    [265, TEXT_Y, 'R'], [200, TEXT_Y, 'R/2'], [75, TEXT_Y, '-R/2'], [20, TEXT_Y, '-R'],
    [TEXT_X, 35, 'R'], [TEXT_X, 95, 'R/2'], [TEXT_X, 215, '-R/2'], [TEXT_X, 275, '-R']
];

// Стрелки на координатных осях
let arrows = [
    [`${W},${H2} ${W - TEXT_OFFSET},${H2 + TEXT_OFFSET} ${W - TEXT_OFFSET},${H2 - TEXT_OFFSET}`],
    [`${W2},${0} ${W2 - TEXT_OFFSET},${TEXT_OFFSET} ${W2 + TEXT_OFFSET},${TEXT_OFFSET}`]
]

// Фон
let background = {x: 0, y: 0, w: 300, h: 300};
// Прямоугольник
let rect = {x: W2 - 2*R, y: H2 - 2*R, w: 2*R, h: 2*R};
// Треугольник
let triangle = `${W2},${H2} ${W2},${H2 - 2*R} ${W2 + R},${H2}`;
// Четверть круга
let circle = `M${W2},${H2} ${W2 + 2*R},${H2} A${2*R} ${2*R} 0 0 1 ${W2} ${H2 + 2*R}Z`;

$(document).ready(function () {
    graph = d3.select('svg');
    graphElem = document.querySelector('svg');
    //console.log(graphElem);

    // Белый фон
    graph.append('rect')
        .attr('x', background.x)
        .attr('y', background.y)
        .attr('width', background.w)
        .attr('height', background.h)
        .attr('fill-opacity', OPACITY)
        .attr('stroke', STROKE)
        .attr('fill', '#FFF');

    graph.append('rect')
        .attr('x', rect.x)
        .attr('y', rect.y)
        .attr('width', rect.w)
        .attr('height', rect.h)
        .attr('fill-opacity', OPACITY)
        .attr('stroke', STROKE)
        .attr('fill', FILL);

    graph.append('polygon')
        .attr('points', triangle)
        .attr('fill-opacity', OPACITY)
        .attr('stroke', STROKE)
        .attr('fill', FILL);

    graph.append('path')
        .attr('d', circle)
        .attr('fill-opacity', OPACITY)
        .attr('fill', FILL)
        .attr('stroke', STROKE);

    lines.forEach(function (line) {
        graph.append('line')
            .attr('x1', line[0])
            .attr('y1', line[1])
            .attr('x2', line[2])
            .attr('y2', line[3])
            .attr('stroke', COLOR);
    });

    texts.forEach(function (text) {
        graph.append('text')
            .attr('x', text[0])
            .attr('y', text[1])
            .text(text[2]);
    });

    arrows.forEach(function (arrow) {
        graph.append('polygon')
            .attr('points', arrow)
            .attr('fill', COLOR);
    });

    redrawPoints();

    graphElem.addEventListener('click', (event) => {
        const r = document.getElementById('main-form:r-hidden');
        console.log(r === null);
        if (r != null) {
            console.log(r);
            let pos = getMousePosition(event);
            let xVal = Math.round((pos.x - W2) / (2*R) * r.value * 100) / 100;
            let yVal = Math.round((H2 - pos.y) / (2*R) * r.value * 100) / 100;
            console.log(pos);
            console.log(xVal);
            console.log(yVal);

            document.getElementById('main-form:x').value = xVal;
            document.getElementById('main-form:y').value = yVal;

            let btn = document.getElementById('main-form:submit-button');
            btn.click();
        }
    });
});

function getMousePosition(event) {
    const rect = graphElem.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}


function addPoint(x, y, r, isHit) {
    graphElem.insertAdjacentHTML('beforeend', getCircleSvg(x, y, r, isHit));
}

function getCircleSvg(x, y, r, isHit) {
    let graphX = H2 + x / r * 2*R;
    let graphY = W2 - y / r * 2*R;
    let col = isHit ? GREEN : RED;
    return `<circle r="4" cx="${graphX}" cy="${graphY}" fill-opacity="1" fill="${col}"></circle>`
}

function invokeRedrawPoints(){
    setTimeout(
        redrawPoints,
        50
    );
    setTimeout(
        redrawPoints,
        100
    );
    setTimeout(
        redrawPoints,
        300
    );
}

function redrawPoints() {
    clearPoints();
    console.log("REDRAW");
    const xTableValues = document.getElementsByClassName('table-x-value');
    const yTableValues = document.getElementsByClassName('table-y-value');
    const rTableValues = document.getElementsByClassName('table-r-value');
    const hitTableValues = document.getElementsByClassName('table-hit-value');
    const rHidden = document.getElementById('main-form:r-hidden');

    for (let i = 0; i < xTableValues.length; i++) {
        let x = parseFloat(xTableValues[i].innerText),
            y = parseFloat(yTableValues[i].innerText),
            r = parseFloat(rTableValues[i].innerText),
            hit = hitTableValues[i].innerText === '✅';
        addPoint(x, y, r, hit);
    }
}

function clearPoints() {
    [...document.querySelectorAll('circle')].map(n => n && n.remove());
}