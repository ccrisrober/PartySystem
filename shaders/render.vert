#version 300 esoutColor
precision mediump float;

layout(location = 0) in vec3 position;
layout(location = 1) in vec3 color;

out vec3 outColor;

void main( )
{
	vec4 eyePos = vec4( view * model * vec4( position, 1.0 ) );
	gl_Position = projection * eyePos;

	outColor = color;

	float dist = length( eyePos.xyz );
	float att = inversesqrt( 0.1 * diff );
	gl_PointSize = 2.0 * att;
}