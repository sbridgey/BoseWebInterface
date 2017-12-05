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
  name: 'NowPlayingTile',
  data() {
    return {
      ipAddress: ''
    };
  },
  created() {
    var self = this
    
    //Test: Print the IP addresses into the console
    getIPs(function(ip) {
      self.ipAddress = ip
      console.log(ip)
    });
  }
};
</script>
