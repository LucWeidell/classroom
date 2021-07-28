import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { studentsSubjectsService } from '../services/StudentsSubjectsService'

export class StudentsSubjectsController extends BaseController {
  constructor() {
    super('api/studentsSubjects')
    this.router
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  /**
       * Adds a data to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async create(req, res, next) {
    try {
      const studentsSubject = await studentsSubjectsService.create(req.body)
      res.send(studentsSubject)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edits data by id from a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      delete req.body.price
      const studentsSubject = await studentsSubjectsService.edit(req.body)
      res.send(studentsSubject)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Removes data by id from a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async delete(req, res, next) {
    try {
      await studentsSubjectsService.delete(req.params.id)
      res.send({ message: 'Successfully Deleted studentsSubject' })
    } catch (error) {
      next(error)
    }
  }
}
