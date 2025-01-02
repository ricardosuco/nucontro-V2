import prisma from '~/infra/database/db-client'

export default defineEventHandler(async event => {
  const databaseVersion = await prisma.$queryRaw<{ server_version: string }[]>`SHOW server_version;`
  const databaseMaxConnections = await prisma.$queryRaw<{ max_connections: number }[]>`SHOW max_connections;`
  const databaseOpenedConnections = await prisma.$queryRaw<{ count: number }[]>`SELECT COUNT(*)::int FROM pg_stat_activity where datname = ${process.env.POSTGRES_DATABASE};`
  setResponseStatus(event, 200)
  return {
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        version: databaseVersion[0].server_version,
        max_connections: databaseMaxConnections[0].max_connections,
        opened_connections: databaseOpenedConnections[0].count,
      },
    },
  }
})
