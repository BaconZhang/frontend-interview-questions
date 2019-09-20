import Graph from "./graph";

class Search {
  private graph: Graph;
  private start: number;
  constructor(graph: Graph, start: number) {
    this.graph = graph;
    this.start = start;
  }

  marked(v: number): boolean {
    return this.graph.getLinked(this.start).includes(v);
  }

  count(): number {
    return this.graph.getLinked(this.start).length;
  }
}

export default Search;