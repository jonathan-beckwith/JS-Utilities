/**
 * A utility function that loops through a collection using an Enumerator. 
 *     This function is equivalent to VB's For Each, In ... Next
 *
 * @param {Collection} collection the collection to loop through.
 * @param {Function} fx(item) Called for each item, with the item as its parameter.
 */
function forEachCollection(collection, fx) {
	var e = new Enumerator(collection);
	for (e.moveFirst(); !e.atEnd(); e.moveNext()) {
		fx(e.item());
	}		
}
/**
 * A utility function to properly loop through the propertys of a JavaScript object.
 * @param {Object} object Any JavaScript object.
 * @param {Function} fx(key, value) called for each property of the object.
 */
function forEachObject(object, fx) {
	for (key in object) {
		if (object.hasOwnProperty(key)) {
			//Pass the key and the value of each  of the object's properties to this function.
			fx(key, object[key]);
		}
	}
}