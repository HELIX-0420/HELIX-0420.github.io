var info = document.getElementById('player');
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', {
      videoId: '8r06lo6qidc', // this is the id of the video at youtube (the stuff after "?v=")
      loop: true,
      events: {
          onReady: function (e) {
              e.target.playVideo();
          },
          onStateChange: function (event) {
              if (event.data === 1) {
              }
          }
      }
  });
  // you can do more stuff with the player variable
}
