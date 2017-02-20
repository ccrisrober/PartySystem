/// <reference path="../ParticleGenerator.ts" />

//namespace generators
//{
	class BoxPosGen extends ParticleGenerator
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

	class RoundPosGen extends ParticleGenerator
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

	class BasicColorGen extends ParticleGenerator
	{
		constructor( )
		{
			super( );
		}
		public generate( dt: number, p: ParticleData, startID: number, endID: number)
		{

		}
	}

	class BasicVelGen extends ParticleGenerator
	{
		constructor( )
		{
			super( );
		}
		public generate( dt: number, p: ParticleData, startID: number, endID: number)
		{

		}
	}
//}