import { describe, expect, it } from 'vitest'

describe('GET /api/v1/status', () => {
  it('should return 200', async () => {
    const response = await fetch('/api/v1/status')
    expect(response.status).toBe(200)

    const responseBody = await response.json()
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
