import { beforeAll, describe, expect, it } from 'vitest'
import orchestrator from '@@/utils/test-orchestrator'

beforeAll(async () => {
  await orchestrator.waitForAllServices()
})

describe('GET /api/v1/status', () => {
  it('should return 200', async () => {
    const response = await fetch('/api/v1/status')
    expect(response.status).toBe(200)

    const responseBody = await response.json()
    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString()
    expect(responseBody.updated_at).toBeDefined()
    expect(responseBody.updated_at).toBe(parsedUpdatedAt)
    expect(responseBody.dependencies.database.version).toBeDefined()
    expect(responseBody.dependencies.database.max_connections).toBeDefined()
    expect(responseBody.dependencies.database.opened_connections).toBeDefined()
    expect(responseBody.dependencies.database.opened_connections).toEqual(1)
    expect(responseBody).toMatchObject({
      updated_at: expect.any(String),
      dependencies: {
        database: {
          version: expect.any(String),
          max_connections: expect.any(String),
          opened_connections: expect.any(Number),
        },
      },
    })
  })
})
