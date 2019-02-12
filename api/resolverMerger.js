import { mergeResolvers } from "merge-graphql-schemas";
import { noteResolver } from "./note/resolvers";

const resolvers = [
    noteResolver
];

export default mergeResolvers(resolvers);