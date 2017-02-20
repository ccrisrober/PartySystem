/// <reference path="IParticleRenderer.ts" />
/// <reference path="./mb/VertexArray.ts" />
/// <reference path="./mb/VertexBuffer.ts" />

class GLParticleRenderer implements IParticleRenderer
{
	public generate(sys, useQuads: boolean)
	{
		var gl: WebGLRenderingContext;

	}
	public destroy( ): void
	{
		var gl: WebGLRenderingContext;

		this._bufPos.destroy( );
		this._bufCol.destroy( );
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

		this._vao.bind( );

		var count = 0; //system->numAliveParticles( );
		if ( count > 0 )
		{
			gl.drawArrays( gl.POINTS, 0, count );
		}
		this._vao.unbind( );
	}

	protected _vao: MB.VertexArray;
	protected _bufPos: MB.VertexBuffer;
	protected _bufCol: MB.VertexBuffer;
}
