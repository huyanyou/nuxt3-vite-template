export default defineEventHandler((event) => {
    console.log('验证')
    event.context.auth = { user: 123 }
})