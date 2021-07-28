import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Assignment = new Schema(
  {
    description: { type: String, required: true },
    link: { type: String },
    studentId: { type: ObjectId, ref: 'Student' },
    subjectId: { type: ObjectId, ref: 'Subject' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Assignment.virtual('', {
  localField: 'studentId',
  ref: 'Student',
  foreignField: '_id',
  justOne: true
})

export default Assignment
