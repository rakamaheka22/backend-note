export const noteType = `
type Note {
  id: String!
  judul: String!
  deskripsi: String
  tgl: String!
}

type Query {
  notes: [Note]
  noteById(
    id: String!
  ): Note
}

type Mutation {
  addNote(
    id: String!
    judul: String!
    deskripsi: String
    tgl: String!
  ): Note
  editNote(
    id: String
    judul: String
    deskripsi: String
    tgl: String
  ): Note
  deleteNote(
    id: String
  ): Note
}

schema {
  query: Query
  mutation: Mutation
}
`;