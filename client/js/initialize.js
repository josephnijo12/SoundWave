const state = {
    songs: []
  }

  fetch('/api/playlist')
    .then(res =>{
        console.log(res) 
        return res.json()})
    .then(songs => {
      state.songs = songs
    //   renderHomePage()
    })

  fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = data.email
      }
    })
