import prisma from '../db-client'
import { RegisterRepository } from '../prisma/repositories/register.repository'
import { UserRepository } from '../prisma/repositories/user.repository'

export const userRepository = new UserRepository(prisma)

export const registerRepository = new RegisterRepository(prisma)
