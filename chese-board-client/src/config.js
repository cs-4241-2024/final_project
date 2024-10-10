export let HOST = 'http://localhost:8080'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  HOST = 'http://localhost:8080'
} else {
  HOST = ''
}
