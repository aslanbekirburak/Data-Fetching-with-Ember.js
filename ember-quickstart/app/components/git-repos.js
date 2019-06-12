import Component from '@ember/component';

export default Component.extend({
    actions: {
        getRepos() {
           /* const api = this.get('host');
            const url = `${api}/auth/coinbase`;
            const headers = {
              'Origin': api
            };
            // , {data: params}
            return this.ajax(url, 'GET');*/
            
            window.console.log("controllers")
            return fetch('https://github.com/users/bekir16/repos',{ method: 'GET',mode: 'no-cors' })
            .then(res => Promise.resolve(res.json()))
            .then(res => window.console.log(res))
            .catch(err=>window.console.log(err)) 
            }
        }        
      
});
