interface IParticleRenderer
{
	generate( sys/*: ParticleSystem*/, useQuads: boolean );
	destroy( ) : void;
	update( ) : void;
	render( ) : void;
}