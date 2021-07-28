import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const StudentSubjects = new Schema(
  {
    studentId: { type: ObjectId, ref: 'Student' },
    subjectId: { type: ObjectId, ref: 'Subject' },
    grade: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default StudentSubjects
