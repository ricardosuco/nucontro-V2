export default defineEventHandler(async event => {
  setResponseStatus(event, 200)
  return {
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        version: '',
        max_connections: '',
        opened_connections: 1,
      },
    },
  }
})
