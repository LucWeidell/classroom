import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StudentsSubjectsService {
  async getAll(query = {}) {
    const studentsSubjects = await dbContext.StudentsSubjects.find(query)
    return studentsSubjects
  }

  async getById(id) {
    const studentsSubjects = await dbContext.StudentsSubjects.findById(id)
    if (!studentsSubjects) {
      throw new BadRequest('Invalid ID')
    }
    return studentsSubjects
  }

  async create(body) {
    const studentsSubjects = await dbContext.StudentsSubjects.create(body)
    return studentsSubjects
  }

  async edit(body) {
    const studentsSubjects = await dbContext.StudentsSubjects.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!studentsSubjects) {
      throw new BadRequest('Invalid ID')
    }
    return studentsSubjects
  }

  async delete(id) {
    const studentsSubjects = await dbContext.StudentsSubjects.findByIdAndDelete(id)
    if (!studentsSubjects) {
      throw new BadRequest('Invalid ID')
    }
    return studentsSubjects
  }
}

export const studentsSubjectssService = new StudentsSubjectsService()
