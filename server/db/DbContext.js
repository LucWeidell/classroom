import ValueSchema from '../models/Value'
import StudentSchema from '../models/Student'
import SubjectSchema from '../models/Subject'
import AssignmentSchema from '../models/Assignment'
import StudentSubectsSchema from '../models/StudentSubjects'
import mongoose from 'mongoose'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Students = mongoose.model('Student', StudentSchema)
  Subjects = mongoose.model('Subject', SubjectSchema)
  Assignments = mongoose.model('Assignment', AssignmentSchema)
  StudentsSubjects = mongoose.model('StudentsSubject', StudentSubjectsSchema)
}

export const dbContext = new DbContext()
