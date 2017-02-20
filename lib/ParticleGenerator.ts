/// <reference path="Particle.ts" />

abstract class ParticleGenerator
{
	constructor() {}
	abstract generate( dt: number, p: ParticleData, startID: number, endID: number);
}