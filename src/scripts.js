var data = {
  games: [
    {
      title: 'Far Cry V',
      platform: 'PC',
      checked: true
    },
    {
      title: 'GTA V',
      platform: 'PC',
      checked: false
    },
    {
      title: 'Red Dead Redemption',
      platform: 'PC',
      checked: true
    },
    {
      title: 'FIFA 2021',
      platform: 'PS5',
      checked: false
    },
    {
      title: 'The Last of Us Part II',
      platform: 'Ps4',
      checked: false
    },
    {
      title: 'The Legend of Zelda: Ocarina of Time',
      platform: 'N64',
      checked: false
    },
  ],
  pageTitle: 'Lista de jogos para terminar',
  newTitle: '',
  newPlatform: ''
  
}

new Vue({
  el: '#app',
  data: data,
  methods: {
    addGame: function(){
      var title = this.newTitle.trim();
      var platform = this.newPlatform.trim();
      if (title && platform) {
        this.games.push({
          title: title,
          platform: platform,
          checked: false,
        })
      }
      this.game = '';
      this.platform = '';
    }
  }
})