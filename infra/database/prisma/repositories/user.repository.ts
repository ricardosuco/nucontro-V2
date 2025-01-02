import type { IRepository } from '#build/interfaces/repository.interface'
import type { PrismaClient, User } from '@prisma/client'

export class UserRepository implements IRepository<User> {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async create(data: User): Promise<User> {
    return this.prisma.user.create({ data })
  }

  async update(id: number, data: Partial<User>): Promise<User | null> {
    return this.prisma.user.update({ where: { id }, data })
  }

  async delete(id: number): Promise<boolean> {
    const deletedUser = await this.prisma.user.delete({ where: { id } })
    return !!deletedUser
  }
}
