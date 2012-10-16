/**
 * Utility function that inverts a dict of keys and values, where value is an array.
 * e.g. {A:[1,2,3], B:[1,2], C:[1]} -> {1:[A,B,C],2:[A,B],3:[A]}
 */
function invertDictionaryArray(dict) {
	var result = {};

	forEachObject(dict, function (key, values) {
		var i = 0;

		for (i = 0; i < values.length; i += 1) {
			//Add the value to the mappingsByTag object if it doesn't already exist.
			if (!result.hasOwnProperty(values[i])) {
				result[values[i]] = [];
			}
			//Add the map number to the tag
			result[values[i]].push(key);
		}
	});
	//Return the MappingsByTag object.
	return result;
}