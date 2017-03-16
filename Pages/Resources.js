const Observable = require('FuseJS/Observable')
const ckan = require('ckan')
const compose = require('node_modules/citapplab/lib/bundle').compose
const resourceList = Observable()

const { 
	parsers,
	resource
} = ckan

const getResourceForMaps = (resourceId) => compose(
	resource(resourceId),
	parsers.resourceGetWithValidLocation
)

this.onParameterChanged((param) => {
	getResourceForMaps(param.resources[0].id)()
		.then((response) => {
			resourceList.replaceAll(response)
		})
		.catch((error) => {
			console.log(error.message)
		})
})

const goBack = () => {
	router.goBack()
}
module.exports = {
	goBack,
	resourceList
}