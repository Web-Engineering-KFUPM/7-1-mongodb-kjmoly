import mongoose from "mongoose";

// TODO-1: Establish Connection
mongoose
  .connect("mongodb+srv://naif:naif1234@cluster0.0atajwd.mongodb.net/TestDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ Connection error:", err));

// TODO-2: Define Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
});

const Student = mongoose.model("Student", studentSchema);

// TODO-3: Create Documents
async function createStudents() {
  await Student.insertMany([
    { name: "Ali", age: 21, major: "CS" },
    { name: "Sara", age: 23, major: "SE" },
  ]);
  console.log("✅ Inserted students");
}
createStudents();

// TODO-4: Read Documents
async function readStudents() {
  const all = await Student.find();
  console.log("📋 All students:", all);
}
readStudents();

// TODO-5: Update Document
async function updateStudent() {
  await Student.updateOne({ name: "Ali" }, { age: 22 });
  console.log("✅ Updated Ali's age to 22");
}
updateStudent();

// TODO-6: Delete Document
async function deleteStudent() {
  await Student.deleteOne({ name: "Sara" });
  console.log("✅ Deleted Sara");
}
deleteStudent();
