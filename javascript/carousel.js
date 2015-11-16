/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-11-12 12:25:16
 */

(function () {
	function carousel (option) {
		if (!option) {
			if (!option.dom) {
				console.error('not set dom');
				return;
			}
			if (!option.viewCount) {
				console.error('not set viewCount');
				return;
			}
		}
		var dot,
			dom = option.dom,
			items = dom.getElementsByTagName('li'),
			w = items[0].clientWidth,
			l = items.length,
			currentCount = 0;
		function slide (count) {
			var slideContent = dom.getElementsByTagName('ul')[0];
			slideContent.style.left = '-' + w*option.viewCount*count + 'px';
		}
		function slideDot () {
			document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', '');
			currentCount = parseInt(this.getAttribute('data-count'), 10);
			document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', 'focus');
			slide(currentCount);
		}
		function slideArrow () {
			var arrow = this.getAttribute('class');
			document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', '');
			if (arrow === 'arrow-l') {
				if (currentCount !== 0) {
					currentCount--;
				}
			} else {
				if ((Math.ceil(l / option.viewCount) - 1) > currentCount) {
					currentCount++;
				}
			}
			document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', 'focus');
			slide(currentCount);
		}
		dot = Math.ceil(l / option.viewCount);
		dom.querySelectorAll('.product-interest')[0].style.width = w*l + 'px';
		if (dot > 1) {
			var arrowL = dom.querySelectorAll('.arrow-l')[0],
				arrowR = dom.querySelectorAll('.arrow-r')[0];
			arrowL.onclick = slideArrow;
			arrowR.onclick = slideArrow;
			arrowL.setAttribute('data-state', '');
			arrowR.setAttribute('data-state', '');

			var dotDom = document.createElement('div');
			dotDom.setAttribute('style', 'text-align:center;');
			for (var i = 0; i < dot; i++) {
				var span = document.createElement('span');
				if (i === 0) {
					span.setAttribute('data-state', 'focus');
				}
				span.setAttribute('class', 'dot');
				span.setAttribute('data-count', i);
				span.onclick = slideDot;
				dotDom.appendChild(span);
			}
			dom.appendChild(dotDom);
		}

		dom.addEventListener('touchstart', handleTouchStart, false);
		dom.addEventListener('touchmove', handleTouchMove, false);

		var xDown = null;
		var yDown = null;

		function handleTouchStart(evt) {
		    xDown = evt.touches[0].clientX;
		    yDown = evt.touches[0].clientY;
		}

		function handleTouchMove(evt) {
		    if ( ! xDown || ! yDown ) {
		        return;
		    }

		    var xUp = evt.touches[0].clientX;
		    var yUp = evt.touches[0].clientY;

		    var xDiff = xDown - xUp;
		    var yDiff = yDown - yUp;

		    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
		        if ( xDiff > 0 ) {
		            /* left swipe */
		            console.log('left swipe');
		            document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', '');
					if ((Math.ceil(l / option.viewCount) - 1) > currentCount) {
						currentCount++;
					}
					document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', 'focus');
					slide(currentCount);
		        } else {
		            /* right swipe */
		            console.log('right swipe');
		            document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', '');
					if (currentCount !== 0) {
						currentCount--;
					}
					document.querySelectorAll('.dot')[currentCount].setAttribute('data-state', 'focus');
					slide(currentCount);
		        }
		    } else {
		        if ( yDiff > 0 ) {
		            /* up swipe */
		            console.log('up swipe');
		        } else {
		            /* down swipe */
		            console.log('down swipe');
		        }
		    }
		    /* reset values */
		    xDown = null;
		    yDown = null;
		}
	}
	this.carousel = carousel;
})();
