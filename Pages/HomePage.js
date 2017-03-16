const Observable = require('FuseJS/Observable')
const ckan = require('ckan')
const compose = require('node_modules/citapplab/lib/bundle').compose
const {
	limit, 
	packages,
	tag
} = ckan

const packageList = Observable()

const getPackagesWithTag = compose(
	packages,
	limit(100),
	tag('Kart')
)

getPackagesWithTag()
	.then((response) => {
		packageList.replaceAll(response)
	})
	.catch((error) => {
		console.log('Something went wrong', error)
	})

const showResources = (argument) => {
	router.push('Resources', argument.data)
}

module.exports = { 
	packageList,
	showResources
}