/* */ 
var conversions = require('./conversions');
var models = Object.keys(conversions);
function buildGraph() {
  var graph = {};
  for (var len = models.length,
      i = 0; i < len; i++) {
    graph[models[i]] = {
      distance: -1,
      parent: null
    };
  }
  return graph;
}
function deriveBFS(fromModel) {
  var graph = buildGraph();
  var queue = [fromModel];
  graph[fromModel].distance = 0;
  while (queue.length) {
    var current = queue.pop();
    var adjacents = Object.keys(conversions[current]);
    for (var len = adjacents.length,
        i = 0; i < len; i++) {
      var adjacent = adjacents[i];
      var node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link(from, to) {
  return function(args) {
    return to(from(args));
  };
}
function wrapConversion(toModel, graph) {
  var path = [graph[toModel].parent, toModel];
  var fn = conversions[graph[toModel].parent][toModel];
  var cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
module.exports = function(fromModel) {
  var graph = deriveBFS(fromModel);
  var conversion = {};
  var models = Object.keys(graph);
  for (var len = models.length,
      i = 0; i < len; i++) {
    var toModel = models[i];
    var node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion(toModel, graph);
  }
  return conversion;
};
