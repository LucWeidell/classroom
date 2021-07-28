import Assignment from '../models/Assigment'
import { assignmentsService } from '../services/AssigmentService'
import { studentsService } from '../services/StudentsService'
import { subjectsService } from '../services/SubjectsService'
import BaseController from '../utils/BaseController'

export class StudentsController extends BaseController {
  constructor() {
    super('api/students')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/assigment', this.getAssignments)
      .get('/:id/subjects', this.getSubjects)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const students = await studentsService.getAll()
      res.send(students)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const student = await studentsService.getById(req.params.id)
      res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async getAssignments(req, res, next) {
    try {
      const assignments = await assignmentsService.getAll({ studentId: req.params.id })
      res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  async getSubjects(req, res, next) {
    try {
      const subjects = subjectsService.getAll({ studentId: req.params.id })
      res.send(subjects)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const student = await studentsService.create(res.body)
      res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const student = studentsService.edit(req.body)
      res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const student = studentsService.remove(req.params.iq)
      res.send({ message: 'deleorted student' })
    } catch (error) {
      next(error)
    }
  }
}
