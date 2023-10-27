      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
          playerVars:{ //영상을 재생하기 위한 여러 변수
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            onReady: function(event) { // 동영상 플레이어가 준비가 되면 함수실행
              event.target.mute() // 음소거 
            }
          }
        });
      }


      //https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters
      // 위에 링크에서 옵션 확인할 수 있음