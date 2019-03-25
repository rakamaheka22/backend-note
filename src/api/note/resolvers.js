import Note from "../../models/noteSchema";

export const noteResolver = {

    Query: {
        notes(_, args){
            return new Promise((resolve, reject) => {
                Note.find({})
                  .populate()
                  .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                  });
            });
        },
        noteById(_, args){
            return new Promise((resolve, reject) => {
                Note.findOne(args).exec((err, res) => {
                  err ? reject(err) : resolve(res);
                });
            });
        }
    },

    Mutation: {
        addNote(_, args){
            const newNote = new Note({ 
                id: (args.id),
                judul: (args.judul),
                deskripsi: (args.deskripsi),
                tgl: (args.tgl)
            });

            return new Promise((resolve, reject) => {
                newNote.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editNote(_, args){
            return new Promise((resolve, reject) => {
                Note.findOneAndUpdate({ id: (args.id) }, { $set: { judul: (args.judul), deskripsi:(args.deskripsi), tgl:(args.tgl) } }).exec(
                  (err, res) => {
                    err ? reject(err) : resolve(res);
                  }
                );
            });
        },
        deleteNote(_, args){
            return new Promise((resolve, reject) => {
                Note.findOneAndDelete(args).exec((err, res) => {
                  err ? reject(err) : resolve(res);
                });
            });
        },
    }
};