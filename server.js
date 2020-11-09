
const express = require('express')
const app = express()
const user = process.env.USER
const pass = process.env.PASS
const docRoot = __dirname + '/public'

app.set('port', process.env.PORT || 3000)

if (user && pass) {
    app.use(express.basicAuth(
        user, pass
    ))
}

app.use(express.logger('dev'))
app.use(express.compress())
app.use(express.static(docRoot))

app.listen(app.get('port'), function() {
    console.log('Server listening on port %s', app.get('port'))
});
