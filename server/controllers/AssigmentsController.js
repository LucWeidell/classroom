import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { assigmentsService } from '../services/AssigmentsService'

export class AssigmentsController extends BaseController {
  constructor() {
    super('api/assigments')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  /**
       * Sends all assigments to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getAll(req, res, next) {
    try {
      const data = await assigmentsService.getAll(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Sends all assigment with Id to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async getById(req, res, next) {
    try {
      const assigment = await assigmentsService.getById(req.params.id)
      res.send(assigment)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Adds a data to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
  async create(req, res, next) {
    try {
      const assigment = await assigmentsService.create(req.body)
      res.send(assigment)
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
      const assigment = await assigmentsService.edit(req.body)
      res.send(assigment)
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
      await assigmentsService.delete(req.params.id)
      res.send({ message: 'Successfully Deleted assigment' })
    } catch (error) {
      next(error)
    }
  }
}
