/// <reference path="IParticleRenderer.ts" />

class GLParticleRenderer implements IParticleRenderer
{
	public generate(sys, useQuads: boolean)
	{
		var gl: WebGLRenderingContext;

	}
	public destroy( ): void
	{
		var gl: WebGLRenderingContext;

		gl.deleteBuffer( this._bufPos );
		gl.deleteBuffer( this._bufPos );
	}
	public update( ): void
	{
		var gl: WebGLRenderingContext;
		var count = 0; //system->numAliveParticles( );
		if ( count > 0 )
		{
			gl.bindBuffer(gl.ARRAY_BUFFER, this._bufPos);

			gl.bindBuffer(gl.ARRAY_BUFFER, this._bufPos);

			gl.bindBuffer(gl.ARRAY_BUFFER, null);
		}
	}
	public render( ): void
	{
		var gl: any;

		gl.bindVertexArray();

		var count = 0; //system->numAliveParticles( );
		if ( count > 0 )
		{
			gl.drawArrays( gl.POINTS, 0, count );
		}
		gl.bindVertexArray( null );
	}

	protected _vao: any;
	protected _bufPos: WebGLBuffer;
	protected _bufCol: WebGLBuffer;
}
