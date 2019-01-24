const getRequest = function(url) {  
    return new Promise((resolve, reject) => {
        fetch(url, {
          method: "GET"
        })
        .then(res => {
            setTimeout(function() {
              resolve(res.json());
            }, 1000);
        })
        .catch(err => {
          reject(err);
        });
    });
}

export default {
    getRequest
}