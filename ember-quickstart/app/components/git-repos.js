import Component from '@ember/component';

export default Component.extend({
    actions: {
      results: [],
      name: null,
        getRepos() {
          let name = this.get('name')
          let url = 'https://api.github.com/users/' + name + '/repos';
          return fetch(url, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(function(response) {
            return response.json();
          }).then(results => {
            this.set('results',results)
          });
        
        }        
    }
});
