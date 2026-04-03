import { expect, test, describe } from 'vitest'
import { Table } from '../../../src/interface/inputData'
import { tableDataToSequelizeScheme } from '../../../src/utilis/dataBase/tableDataToSequelize'

describe('For Sequelize Scheme', () => {
	const customScheme: Table[] = [
		{
			name: 'users',
			columns: [
				{
					id: '1',
					name: 'id',
					dataType: 'bigint',
					isPrimaryKey: true,
					notNull: true,
					unique: false,
				},
				{
					id: '2',
					name: 'email',
					dataType: 'varchar',
					isPrimaryKey: false,
					notNull: true,
					unique: true,
				},
				{
					id: '3',
					name: 'profile',
					dataType: 'jsonb',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
				{
					id: '4',
					name: 'created_at',
					dataType: 'timestamp',
					isPrimaryKey: false,
					notNull: true,
					unique: false,
				},
			],
		},
		{
			name: 'orders',
			columns: [
				{
					id: '5',
					name: 'id',
					dataType: 'integer',
					isPrimaryKey: true,
					notNull: true,
					unique: false,
				},
				{
					id: '6',
					name: 'user_id',
					dataType: 'integer',
					isPrimaryKey: false,
					notNull: true,
					unique: false,
					foreignTo: {
						name: 'users',
						column: 'id',
					},
				},
				{
					id: '7',
					name: 'total',
					dataType: 'numeric',
					isPrimaryKey: false,
					notNull: true,
					unique: false,
				},
				{
					id: '8',
					name: 'is_paid',
					dataType: 'boolean',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
				{
					id: '9',
					name: 'description',
					dataType: 'text',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
				{
					id: '10',
					name: 'placed_on',
					dataType: 'date',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
				{
					id: '11',
					name: 'tracking_id',
					dataType: 'uuid',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
				{
					id: '12',
					name: 'ratio',
					dataType: 'double precision',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
				{
					id: '13',
					name: 'elapsed',
					dataType: 'real',
					isPrimaryKey: false,
					notNull: false,
					unique: false,
				},
			],
		},
	]

	const schemeStr = tableDataToSequelizeScheme(customScheme)

	test('maps field types and options into Sequelize createTable blocks', () => {
		expect(schemeStr).toContain(`const { DataTypes } = require('sequelize');`)
		expect(schemeStr).toContain(`await queryInterface.createTable('users', {`)
		expect(schemeStr).toContain(`type: Sequelize.BIGINT, { primaryKey: true, autoIncrement: true, allowNull: false }`)
		expect(schemeStr).toContain(`type: Sequelize.STRING, { allowNull: false, unique: true }`)
		expect(schemeStr).toContain(`type: Sequelize.JSON`)
		expect(schemeStr).toContain(`type: Sequelize.DATE, { allowNull: false }`)
		expect(schemeStr).toContain(`type: Sequelize.INTEGER, { primaryKey: true, autoIncrement: true, allowNull: false }`)
		expect(schemeStr).toContain(`type: Sequelize.DECIMAL, { allowNull: false }`)
		expect(schemeStr).toContain(`type: Sequelize.BOOLEAN`)
		expect(schemeStr).toContain(`type: Sequelize.TEXT`)
		expect(schemeStr).toContain(`type: Sequelize.DATEONLY`)
		expect(schemeStr).toContain(`type: Sequelize.UUID`)
		expect(schemeStr).toContain(`type: Sequelize.DOUBLE`)
		expect(schemeStr).toContain(`type: Sequelize.FLOAT`)
	})

	test('adds foreign key constraints and reverses drop order', () => {
		expect(schemeStr).toContain(`await queryInterface.addConstraint('orders', {`)
		expect(schemeStr).toContain(`fields: ['user_id'],`)
		expect(schemeStr).toContain(`references: {`)
		expect(schemeStr).toContain(`table: 'users',`)
		expect(schemeStr).toContain(`field: 'id'`)
		expect(schemeStr).toContain(`await queryInterface.dropTable('orders');`)
		expect(schemeStr).toContain(`await queryInterface.dropTable('users');`)
	})
})
