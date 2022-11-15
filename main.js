function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotResults);
}

nosex=0;
nosey=0;

function preload(){
    m= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function modelLoaded(){
console.log("Model Loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x"+results[0].pose.nose.x);
        console.log("nose y"+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-25;
        nosey=results[0].pose.nose.y;
    }
}

function draw (){
    image(video,0,0,300,300);
    image(m,nosex,nosey,50,20);
    
}


function save(){
    save('FilteredImage.png');
}