// Copyright 2022 Alexander Samorodov <blitzerich@gmail.com>

module.exports = {
	presets: [
		['@babel/preset-env', {targets: {node: 'current'}}],
		'@babel/preset-typescript',
	],
};