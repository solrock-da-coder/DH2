export const Conditions: { [k: string]: ConditionData; } = {
	frz: {
		inherit: true,
		onBeforeMove(pokemon, target, move) {},
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
		onModifySpA(spa, pokemon) {
			return this.chainModify(0.5);
		},
		onStart(target, source, sourceEffect) {
			this.add('-message', `${target.name} was frostbitten! Special Attack halved!`);
		},
	},
};