/// <reference path="../gl-matrix.d.ts" />

class ParticleData
{
	protected _pos: Float32Array;
	protected _col: Float32Array;
	protected _startCol: Float32Array;
	protected _endCol: Float32Array;
	protected _vel: Float32Array;
	protected _acc: Float32Array;
	protected _alive: [boolean];

	public generate( maxSize: number): void
	{
		this._pos = vec4.create();
		this._col = vec4.create();
		this._startCol = vec4.create();
		this._endCol = vec4.create();
		this._vel = vec4.create();
		this._acc = vec4.create();
		this._alive = [true];
	}
}