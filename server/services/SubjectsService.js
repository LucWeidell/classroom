import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SubjectsService {
  async getAll(query = {}) {
    const subject = await dbContext.Subjects.find(query)
    return subject
  }

  async getById(id) {
    const subject = await dbContext.Subjects.findById(id)
    if (!subject) {
      throw new BadRequest('Invalid ID')
    }
    return subject
  }

  async create(body) {
    const subject = await dbContext.Subjects.create(body)
    return subject
  }

  async edit(body) {
    const subject = await dbContext.Subjects.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!subject) {
      throw new BadRequest('Invalid ID')
    }
    return subject
  }

  async delete(id) {
    const subject = await dbContext.Subjects.findByIdAndDelete(id)
    if (!subject) {
      throw new BadRequest('Invalid ID')
    }
    return subject
  }
}

export const subjectsService = new SubjectsService()
