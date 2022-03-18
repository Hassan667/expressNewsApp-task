const request = require('request')

const news = async(word, callback) => {
    const url = `http://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=705eb8fdef79463785fd709e68626731`

    await request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Error has occurred', undefined)
        } else if (response.body.status === 'error') {
            callback('Error title: ', response.body.code)
            callback('Error Message: ', response.body.message)
        } else {
            for (let i = 0; i < response.body.articles.length; i++) {
                callback(undefined, {
                    title: response.body.articles[i].title,
                    description: response.body.articles[i].description,
                    url: response.body.articles[i].urlToImage
                })
            }
        }
    })
}

module.exports = news