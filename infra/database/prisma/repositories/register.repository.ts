import type { IRepository } from '#build/interfaces/repository.interface'
import type { PrismaClient, Register } from '@prisma/client'

export class RegisterRepository implements IRepository<Register> {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Register[]> {
    return this.prisma.register.findMany()
  }

  async findById(id: number): Promise<Register | null> {
    return this.prisma.register.findUnique({ where: { id } })
  }

  async create(data: Register): Promise<Register> {
    return this.prisma.register.create({ data })
  }

  async update(id: number, data: Partial<Register>): Promise<Register | null> {
    return this.prisma.register.update({ where: { id }, data })
  }

  async delete(id: number): Promise<boolean> {
    const deletedRegister = await this.prisma.register.delete({ where: { id } })
    return !!deletedRegister
  }
}
