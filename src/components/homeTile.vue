<template>
  <div class="col-md-4">
    <b-jumbotron>
      <template slot="header">
        Your Bose
      </template>
      <template slot="lead">
        The IP Address for your bose is - {{ipAddress}}
      </template>
      <hr class="my-4">
      <p>
        Control your bose from this page
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'HomeTile',
  data() {
    return {
      ipAddress: ''
    };
  },
  created() {
    var self = this
    function getIPs(callback) {
      var ipDups = {};

      //compatibility for firefox and chrome
      var RTCPeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;

      //minimal requirements for data connection
      var mediaConstraints = {
        optional: [{ RtpDataChannels: true }]
      };

      var servers = {
        iceServers: [{ urls: 'stun:stun.services.mozilla.com' }]
      };

      //construct a new RTCPeerConnection
      var pc = new RTCPeerConnection(servers, mediaConstraints);

      function handleCandidate(candidate) {
        //match just the IP address
        var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
        var ipAddr = ipRegex.exec(candidate)[1]

        if (typeof ipAddr !== 'undefined' && ipDups[ipAddr] === undefined) {
          callback(ipAddr)
        }

        ipDups[ipAddr] = true
      }

      //listen for candidate events
      pc.onicecandidate = function(ice) {
        //skip non-candidate events
        if (ice.candidate) handleCandidate(ice.candidate.candidate)
      };

      //create a bogus data channel
      pc.createDataChannel('')

      //create an offer sdp
      pc.createOffer(
        function(result) {
          //trigger the stun server request
          pc.setLocalDescription(result, function() {}, function() {})
        },
        function() {}
      );

      //wait for a while to let everything done
      setTimeout(function() {
        //read candidate info from local description
        var lines = pc.localDescription.sdp.split("\n")

        lines.forEach(function(line) {
          if (line.indexOf('a=candidate:') === 0) {
            handleCandidate(line)
          }
        });
      }, 1000);
    }

    //Test: Print the IP addresses into the console
    getIPs(function(ip) {
      self.ipAddress = ip
      console.log(ip)
    });
  }
};
</script>
