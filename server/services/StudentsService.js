import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StudentsService {
  async getAll(query = {}) {
    const student = await dbContext.Students.find(query)
    return student
  }

  async getById(id) {
    const student = await dbContext.Cars.findById(id)
    if (!student) {
      throw new BadRequest('Invalid ID')
    }
    return student
  }

  async create(body) {
    const student = await dbContext.Students.create(body)
    return student
  }

  async edit(body) {
    const student = await dbContext.Students.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!student) {
      throw new BadRequest('Invalid ID')
    }
    return student
  }

  async delete(id) {
    const student = await dbContext.Students.findByIdAndDelete(id)
    if (!student) {
      throw new BadRequest('Invalid ID')
    }
    return student
  }
}

export const studentsService = new StudentsService()
