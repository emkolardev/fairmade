
var carousel = Sliderman.slider({container: 'carousel', width: 640, height: 300,
display: {
	pause: true, // slider pauses on mouseover
	autoplay: 3000, // 3 seconds slideshow
	always_show_loading: 200, // testing loading mode
	description: {background: '#ffffff', opacity: 0.5, height: 50, position: 'bottom'}, // image description box settings
	loading: {background: '#000000', opacity: 0.2, image: 'img/loading.gif'}, // loading box settings
	buttons: {opacity: 1, prev: {className: 'SliderNamePrev', label: ''}, next: {className: 'SliderNameNext', label: ''}}, // Next/Prev buttons settings
	navigation: {container: 'SliderNameNavigation', label: '&nbsp;'} // navigation (pages) settings
}});