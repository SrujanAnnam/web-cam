var video=document.querySelector('#webcam');
if(navigator.getUserMedia){
 navigator.getUserMedia({video:true},handleVideo,videoError);
 }
 function handleVideo(stream){
   video.srcObject = (stream);
video.play();
}
function videoError(e){
alert("You blocked! the camera" + "\n" + "Press allow! to run camera")
}
var removing = browser.permissions.remove(
   webcam              
)
const permissionToRemove = {
  permissions: ["webcam"]
}
function remove() {
  console.log("removing");
  browser.permissions.remove(permissionToRemove).then(result => {
    console.log(result);
  });
}
