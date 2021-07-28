import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class AssignmentsService {
  async getAll(query = {}) {
    const assignments = await dbContext.Assignments.find(query)
      .populate('studentId', 'name') // -email. -id, name email
      .populate('subjectId', 'name')
    return assignments
  }

  async getById(id) {
    const assignments = await dbContext.Assignments.findById(id)
    if (!assignments) {
      throw new BadRequest('Invalid ID')
    }
    return assignments
  }

  async create(body) {
    const assignments = await dbContext.Assignments.create(body)
    return assignments
  }

  async edit(body) {
    const assignments = await dbContext.Assignments.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!assignments) {
      throw new BadRequest('Invalid ID')
    }
    return assignments
  }

  async delete(id) {
    const assignments = await dbContext.Assignments.findByIdAndDelete(id)
    if (!assignments) {
      throw new BadRequest('Invalid ID')
    }
    return assignments
  }
}

export const assignmentssService = new AssignmentsService()
