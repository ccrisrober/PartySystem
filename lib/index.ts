/// <reference path="./mb/Program.ts" />
/// <reference path="./mb/GLContextW2.ts" />
/// <reference path="./mb/VertexArray.ts" />
/// <reference path="./mb/VertexBuffer.ts" />
/// <reference path="./mb/Camera.ts" />

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

let context: MB.GLContext;
context = new MB.GLContextW2( canvas ); 

let camera: MB.Camera;
camera = new MB.Camera(new Float32Array([0.15, 0.25, 3.5]));

let prog: MB.Program;
prog = new MB.Program( context );
prog.load( 
`#version 300 es
precision mediump float;
in vec3 position;
in vec3 color;

uniform mat4 projection;
uniform mat4 view;
// uniform mat4 model;

out vec3 fColor;
void main() 
{
	/*gl_Position = projection * view * vec4(position, 1.0);
	fColor = color;
	gl_PointSize = 15.0;*/
	vec4 eyePos = vec4( view * vec4( position, 1.0 ) );
	gl_Position = projection * eyePos;

	fColor = color;

	float diff = length( eyePos.xyz );
	float att = inversesqrt( 0.1 * diff );
	gl_PointSize = 2.0 * att;
}
`, 
`#version 300 es
precision mediump float;
out vec4 fragColor;
in vec3 fColor;
void main() 
{
	fragColor = vec4(fColor, 1.0);
}` );
prog.complete( );

let gl: WebGL2RenderingContext = context.gl;

var VAO = new MB.VertexArray( context );
var VB = new MB.VertexBuffer( context, MB.ctes.BufferType.Array );

VAO.bind( );
// Unnecessary VB.bind( );
VB.data(new Float32Array([
	// position			 // color
	 -0.5,  -0.5,  0.0, 		1.0, 0.0, 0.0, 
	  0.5,  -0.5,  0.0, 		0.0, 1.0, 0.0, 
	  0.0,   0.5,  0.0, 		0.0, 0.0, 1.0,

	-0.25, -0.25,  0.0, 		1.0, 0.0, 0.0, 
	 0.25, -0.25,  0.0, 		0.0, 1.0, 0.0, 
	  0.0,  0.25,  0.0, 		0.0, 0.0, 1.0,

	-0.05, -0.05,  0.0, 		1.0, 0.0, 0.0, 
	 0.05, -0.05,  0.0, 		0.0, 1.0, 0.0, 
	  0.0,  0.05,  0.0, 		0.0, 0.0, 1.0
]), MB.ctes.UsageType.StaticDraw);
gl.vertexAttribPointer( 0, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0 );
gl.enableVertexAttribArray( 0 );
gl.vertexAttribPointer( 1, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT );
gl.enableVertexAttribArray( 1 );
VB.unbind( );
VAO.unbind( );

let view: Float32Array, projection: Float32Array;

document.addEventListener("keydown", function (ev)
{
  if (ev.keyCode === 40 || ev.keyCode === 38)
  {
    ev.preventDefault();
  }
  var key = String.fromCharCode(ev.keyCode);
  console.log(key);
  var speed = 0.05;
  switch (key)
  {
    case "W":
      camera.processKeyboard(4, speed);
      break;
    case "S":
      camera.processKeyboard(5, speed);
      break;
    case "A":
      camera.processKeyboard(2, speed);
      break;
    case "D":
      camera.processKeyboard(3, speed);
      break;
    case "E":
      // - .
      camera.processKeyboard(0, speed);
      break;
    case "Q":
      // + .
      camera.processKeyboard(1, speed);
      break;
  }

  switch (ev.keyCode)
  {
    case 38:
			camera.processMouseMovement(0.0, 2.5);
			break;
		case 40:
			camera.processMouseMovement(0.0, -2.5);
			break;
		case 37:
			camera.processMouseMovement(2.5, 0.0);
			break;
		case 39:
			camera.processMouseMovement(-2.5, 0.0);
			break;
  }
  view = camera.GetViewMatrix();
  projection = camera.GetProjectionMatrix(canvas.width, canvas.height);
  //gl.uniformMatrix4fv(program.uniformLocations['view'], false, view);
  //gl.uniformMatrix4fv(program.uniformLocations['proj'], false, projection);
  //gl.uniform3fv(program.uniformLocations["viewPos"], camera.position);
});
view = camera.GetViewMatrix();
projection = camera.GetProjectionMatrix(canvas.width, canvas.height);
var lastTime = Date.now();
let deltaTime = 0.0;
function __render__( dt?: number ) 
{
	gl.viewport( 0, 0, 500, 500 );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	gl.clear( gl.COLOR_BUFFER_BIT );
	prog.use( );

	var currentTime = Date.now();
	var timeElapsed = currentTime - lastTime;

	camera.timeElapsed = 1.0;//timeElapsed;

	gl.uniformMatrix4fv(prog.uniformLocations['view'], false, view);
 	gl.uniformMatrix4fv(prog.uniformLocations['projection'], false, projection);
	VAO.bind( );
		gl.drawArrays( gl.POINTS, 0, 9 );
	VAO.unbind( );

	requestAnimationFrame( __render__ );
}

__render__( 0.0 );