import { mergeTypes } from "merge-graphql-schemas";
import { noteType } from "./note/types";

const types = [
    noteType
];

export default mergeTypes(types);