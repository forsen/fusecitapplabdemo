const Observable = require('FuseJS/Observable')
const ckan = require('ckan')

const { packages } = ckan
const packageList = Observable()

packages()
	.then((response) => {
		packageList.replaceAll(response)
	})
	.catch((error) => {
		console.log('Something went wrong', error)
	})

module.exports = { packageList }