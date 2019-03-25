import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  judul: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: false
  },
  tgl: {
    type: String,
    required: true
  }
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;