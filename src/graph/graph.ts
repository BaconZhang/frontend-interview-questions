class Graph {
  private vertices: number;
  private edges: number;
  private record: Map<number, number[]>;
  constructor(vertices: number) {
    this.vertices = vertices;
    this.edges = 0;
    this.record = new Map<number, number[]>(
      Array.from({ length: vertices }, (_, index) => [index, []] as [number, number[]])
    );
  }

  public getVertices(): number {
    return this.vertices;
  }

  public getEdges(): number {
    return this.edges;
  }

  public getLinked(key: number): number[] {
    return this.record.get(key) || [];
  }

  private setLinked(key: number, linked: number[]) {
    this.record.set(key, linked);
  }

  public addEdge(start: number, end: number): void {
    const linkedStart = this.getLinked(start);
    const linkedEnd = this.getLinked(end);
    this.setLinked(start, linkedStart.filter(n => n !== end).concat(end));
    this.setLinked(end, linkedEnd.filter(n => n !== start).concat(start));
  }
}

export default Graph;