

// let canvas = new fabric.Canvas("canvas",{
//     width:500,
//     height:500
// });

// canvas.renderAll();

// fabric.Image.fromURL('',(img)=>{
//     canvas.backgroundImage = img;
//     canvas.renderAll();
// })


// const initCanvas = (id) =>{
//     return new fabric.Canvas(id,{
//         width:500,
//         height:500
//     });
// }

// const setBackground = (url, canvas) =>{
//  fabric.Image.fromURL(url,(img)=>{
//     canvas.backgroundImage = img;
//     canvas.renderAll();
// })
// }


// const canvas = initCanvas('canvas');
// setBackground('https://img.freepik.com/premium-photo/teddy-bear-indoors-still-life_23-2151372870.jpg?ga=GA1.1.1806539589.1718552061',canvas)


var canvas = new fabric.Canvas('canvas');
canvas.add(new fabric.Circle({ radius: 30, fill: 'red', top: 50, left: 20 }));
canvas.add(new fabric.Circle({ radius: 30, fill: 'green', top: 50, left: 120 }));
canvas.add(new fabric.Circle({ radius: 30, fill: 'blue', top: 50, left: 220 }));
canvas.add(new fabric.Rect({ width: 50, height: 50, fill: 'magenta', top: 10, left: 75 }));

canvas.backgroundColor = '(rgba(0,0,255,0.3)';
canvas.renderAll();



// canvas.selectionColor = 'rgba(0,255,0,0.3)';
// canvas.selectionBorderColor = 'red';
// canvas.selectionLineWidth = 5;
this.__canvases.push(canvas);