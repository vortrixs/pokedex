import type { Pokemon } from "pokenode-ts";
import { writable } from "svelte/store";

const listData = writable<Pokemon[]>([]);

export default listData;