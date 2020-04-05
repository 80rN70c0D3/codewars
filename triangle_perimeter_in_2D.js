/*
Write a function calculating perimeter of a Triangle defined this way.
  
Triangle {
  a: Point { x: 10, y: 10 },
  b: Point { x: 40, y: 10 },
  c: Point { x: 10, y: 50 } }

*/
//triangle exemple
//{a:{ x: 10, y: 10 },b:{ x: 40, y: 10 },c:{ x: 10, y: 50 }}
function trianglePerimeter(triangle) {
  console.log(triangle);
  console.log(triangle.a.x);
  var aB = Math.hypot(triangle.a.x - triangle.b.x, triangle.a.y - triangle.b.y);
  var bC = Math.hypot(triangle.b.x - triangle.c.x, triangle.b.y - triangle.c.y);
  var cA = Math.hypot(triangle.c.x - triangle.a.x, triangle.c.y - triangle.a.y);
  return aB + bC + cA;
}