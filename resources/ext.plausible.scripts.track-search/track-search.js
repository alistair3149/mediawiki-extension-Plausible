// Search Input Tracking
( function () {
	var eventName = 'SearchInput',
		search = document.getElementById( 'searchInput' ),
		sendAfter = 200, // ms
		timeoutId;

	if ( typeof window.plausible === 'undefined' || search === null ) {
		return;
	}

	search.addEventListener( 'input', function ( event ) {
		clearTimeout( timeoutId );

		if ( event.target.value === '' ) {
			return;
		}

		timeoutId = setTimeout( function () {
			window.plausible( eventName, { props: { query: event.target.value } } );
		}, sendAfter );
	} );
}() );
