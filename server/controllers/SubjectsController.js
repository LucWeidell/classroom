import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { subjectsService } from '../services/SubjectssService'

    export class SubjectsController extends BaseController {
      constructor() {
        super('api/subjects')
        this.router
          .get('', this.getAll)
          .get('/:id', this.getById)
          .post('', this.create)
          .put('/:id', this.edit)
          .delete('/:id', this.delete)
      }

      /**
       * Sends all subjects to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
      async getAll(req, res, next) {
        try {
          const data = await subjectsService.getAll(req.query)
          res.send(data)
        } catch (error) {
          next(error)
        }
      }

      /**
       * Sends all subject with Id to a client by request
       * @param {import('express').Request} req
       * @param {import('express').Response} res
       * @param {import('express').NextFunction} next
       */
      async getById(req, res, next) {
        try {
          const subject = await subjectsService.getById(req.params.id)
          res.send(subject)
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
          const subject = await subjectsService.create(req.body)
          res.send(subject)
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
          const subject = await subjectsService.edit(req.body)
          res.send(subject)
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
          await subjectsService.delete(req.params.id)
          res.send({ message: 'Successfully Deleted subject' })
        } catch (error) {
          next(error)
        }
      }