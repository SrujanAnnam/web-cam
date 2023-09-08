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

///////////////////////////////////////////////////////////////////
new
 if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Request access to the webcam
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // The stream object contains the webcam feed
      var videoElement = document.querySelector('#webcam');
      videoElement.srcObject = stream;
      videoElement.play();
    })
    .catch(function (error) {
      console.error('Error accessing the webcam:', error);
    });
} else {
  console.error('getUserMedia is not supported in this browser');
}



