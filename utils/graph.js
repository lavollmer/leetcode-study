// graph.js

// Graph represented as an adjacency list
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1); // For undirected graph
    }

    // Depth-First Search (DFS)
    dfs(startNode, visited = new Set()) {
        visited.add(startNode);
        console.log(startNode);

        for (let neighbor of this.adjacencyList[startNode]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }

    // Breadth-First Search (BFS)
    bfs(startNode) {
        const visited = new Set();
        const queue = [startNode];
        visited.add(startNode);

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node);

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

module.exports = { Graph };
