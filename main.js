noseX = 0;
noseY = 0;
function preload(){
    lipstick = loadImage('https://i.postimg.cc/PrfHsJZF/R.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
   if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-25;
    noseY = results[0].pose.nose.y+15;
    }
}
function modelLoaded(){
    console.log('poseNet is Intialized');
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(lipstick,noseX,noseY,50,20)
}
function take_snapshot(){
    save('Filter_Image.png');
}