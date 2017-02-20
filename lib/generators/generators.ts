/// <reference path="../ParticleGenerator.ts" />

namespace generators
{
	export class BoxPosGen extends ParticleGenerator
	{
		constructor( )
		{
			super( );
			this._pos = [0.0, 0.0, 0.0, 0.0];
			this._maxStartPosOffset = [0.0, 0.0, 0.0, 0.0];
		}
		public generate( dt: number, p: ParticleData, startID: number, endID: number)
		{

		}

		protected _pos: any;
		protected _maxStartPosOffset: any;
	}

	export class RoundPosGen extends ParticleGenerator
	{
		constructor( center = [0.0, 0.0, 0.0, 0.0], radX = 0.0, radY = 0.0 )
		{
			super( );
			this._center = center;
			this._radX = radX;
			this._radY = radY;
		}
		public generate( dt: number, p: ParticleData, startID: number, endID: number)
		{

		}

		protected _center: any;
		protected _radX: number;
		protected _radY: number;
	}

	export class BasicColorGen extends ParticleGenerator
	{
		constructor( )
		{
			super( );
		}
		public generate( dt: number, p: ParticleData, startID: number, endID: number)
		{

		}
	}

	export class BasicVelGen extends ParticleGenerator
	{
		constructor( )
		{
			super( );
		}
		public generate( dt: number, p: ParticleData, startID: number, endID: number)
		{

		}
	}
}